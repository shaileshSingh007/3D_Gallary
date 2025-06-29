// 3D Model Viewer JavaScript - Iframe Version (Functional Approach)
let currentModel = null;
let isLoading = false;
let models = {};
let settings = {};
let ui = {};

// Initialize the model viewer
function initModelViewer() {
    // Use configuration from config.js
    models = MODEL_CONFIG.models;
    settings = MODEL_CONFIG.settings;
    ui = MODEL_CONFIG.ui;
    
    setupEventListeners();
    setupIframeEvents();
    updateModelInfo();
    
    // Auto-load default model if enabled
    if (settings.autoLoad && settings.defaultModel) {
        loadModel(settings.defaultModel);
    }
}

function setupEventListeners() {
    // Dropdown functionality
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    // Toggle dropdown
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.dropdown').classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        document.querySelector('.dropdown').classList.remove('active');
    });
    
    // Prevent dropdown from closing when clicking inside
    dropdownContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Handle model selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const modelKey = item.getAttribute('data-model');
            loadModel(modelKey);
            
            // Update dropdown UI
            dropdownItems.forEach(di => di.classList.remove('active'));
            item.classList.add('active');
            
            // Update selected model text
            
            
            // Close dropdown
            document.querySelector('.dropdown').classList.remove('active');
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        handleResize();
    });
    
    // Handle orientation change on mobile
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            handleResize();
        }, 100);
    });
}

function setupIframeEvents() {
    const iframe = document.getElementById('modelFrame');
    
    // Show loading when iframe starts loading
    iframe.addEventListener('loadstart', () => {
        showLoading(true);
    });
    
    // Hide loading when iframe finishes loading, but add a delay to ensure model is visible
    iframe.addEventListener('load', () => {
        // Add fade-in animation if enabled
        if (ui.animations.enabled) {
            document.querySelector('.model-container').classList.add('fade-in');
        }
        // Keep loader for at least 2 seconds after load event
        setTimeout(() => {
            showLoading(false);
            isLoading = false;
        }, 2000); // 2 seconds delay
    });
    
    // Handle iframe errors
    iframe.addEventListener('error', () => {
        showLoading(false);
        isLoading = false;
        showError('Failed to load 3D model');
    });
}

async function loadModel(modelKey) {
    if (isLoading || !models[modelKey]) return;
    
    isLoading = true;
    currentModel = modelKey;
    
    // Show loading overlay
    showLoading(true);
    
    // Update model info
    updateModelInfo(modelKey);
    
    try {
        const iframe = document.getElementById('modelFrame');
        
        // Set the iframe source to load the new model
        iframe.src = models[modelKey].url;
        
        console.log(`Loading model: ${models[modelKey].name}`);
        
    } catch (error) {
        console.error('Failed to load model:', error);
        showError(`Failed to load ${models[modelKey].name}`);
        isLoading = false;
        showLoading(false);
    }
}

function showLoading(show) {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (show) {
        loadingOverlay.classList.add('active');
    } else {
        loadingOverlay.classList.remove('active');
    }
}

function showError(message) {
    // Create error notification
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-notification';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4757;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(255, 71, 87, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(errorDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        errorDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 300);
    }, 5000);
}

function updateModelInfo(modelKey = null) {
    const desc = document.getElementById('description');
    //const modelType = document.getElementById('modelType');
    const btn = document.getElementById('selectedModel');

     

    if (modelKey && models[modelKey]) {
        desc.textContent = models[modelKey].description;
         
        btn.textContent = models[modelKey].name;
       
    } else {
        desc.textContent = 'No model selected';
        //modelType.textContent = '-';
       // modelStatus.textContent = 'Ready';
    }
    
}

function handleResize() {
    // Iframe automatically handles resize, but we can add custom logic here if needed
    const iframe = document.getElementById('modelFrame');
    if (iframe) {
        // Trigger any custom resize logic if needed
        console.log('Window resized, iframe updated');
    }
}

// Utility functions
function getCurrentModel() {
    return currentModel ? models[currentModel] : null;
}

function isModelLoaded() {
    return currentModel !== null && !isLoading;
}

// Add CSS animations for notifications
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Global error handler
function handleGlobalError(e) {
    console.error('Application error:', e);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addNotificationStyles();
    initModelViewer();
});

// Set up global error handling
window.addEventListener('error', handleGlobalError);

//add dropdown

let n = Object.keys(MODEL_CONFIG.models).length;

function addDropdownItems() {
    const dropdownContent = document.getElementById('dropdownContent');
    
     
    for (let i = 1; i <= n; i++) {
    const modelKey = `model${i}`;
    if (MODEL_CONFIG.models[modelKey]) {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        div.setAttribute('data-model', modelKey);
        
        const icon = document.createElement('i');
        icon.className = MODEL_CONFIG.models[modelKey].icon;;
        
        const span = document.createElement('span');
        span.textContent = MODEL_CONFIG.models[modelKey].name;
        
        div.appendChild(icon);
        div.appendChild(span);
        dropdownContent.appendChild(div);
    }
}
}

addDropdownItems()