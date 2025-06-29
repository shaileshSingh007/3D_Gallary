// Configuration file for 3D Model Viewer
// Add your Spline iframe URLs here

const MODEL_CONFIG = {
    // Replace these with your actual Spline iframe URLs
    models: {
        model1: {
            name: "OSD System (New)",
            Type: "Machine interface",
            url: "https://my.spline.design/osdsystemnew-xBrO9nfNPB7mVQJ4e3UcFgbI/",
            icon: "fas fa-cube",
            description: "3D model of the OSD system, showcasing its design and functionality. This model is a replica of the original OSD system, providing a detailed view of its components and features."
        },
         model2: {
            name: "OSD SYSTEM ( Old )",
            type: "3D Environment", 
            url: "https://my.spline.design/osdcopy-14ba7c884d4ab91a3a5f174b5eeb6e4c/",
            icon: "fas fa-cube",
            description: "3D model of the OSD system, showcasing its design and functionality. This model is a replica of the original OSD system, providing a detailed view of its components and features."
        },
        model3: {
            name: "OSD SYSTEM with Sprayers",
            type: "3D Environment", 
            url: "https://my.spline.design/untitled-70ac175303563346bf3ad151e95e51f9/",
            icon: "fas fa-cube",
            description: "OSD system with sprayers is a 3D model that showcases the innovative design and functionality of the OSD system, featuring integrated sprayers for enhanced performance. This model highlights the advanced engineering and user-friendly interface of the OSD system, making it a perfect fit for modern applications."
        },
        model4: {
            name: "Double Brush Skimmer", 
            type: "3D Scene",
            url: "https://my.spline.design/untitled-a046ec8eae4f77dd1608a2c60aebf6b3/",
            icon: "fas fa-cube",
            description: "3D model of a double brush skimmer, showcasing its design and functionality. This model is a replica of the original double brush skimmer, providing a detailed view of its components and features. The skimmer is designed for efficient oil spill cleanup, featuring dual brushes for enhanced performance."
            
        },
        model5: {
            name: "3D Workspace/Desk Setup",
            type: "3D Environment", 
            url: "https://my.spline.design/untitled-4311c7f163ecb050a762cde7628da9ba/",
            icon: "fas fa-project-diagram",
            description: "A creative workspace brought to life in 3D — showcasing my passion for coding, design, and digital craftsmanship. Explore my world as a frontend developer."
        },
         model6: {
            name: "My Laptop",
            type: "3D Environment", 
            url: "https://my.spline.design/mylaptop-6685719c1dd092ad2fe70fa4b39a958b/",
            icon: "fas fa-laptop",
            description: "A complete 3D laptop creation with hover effects and interactive elements. This model showcases my skills in 3D design and frontend development, bringing a realistic laptop experience to life."
        },
         model7: {
            name: "POWERPACK",
            type: "3D Environment", 
            url: "https://my.spline.design/untitled-PJDHUkB3K9yQARcFIQRaSEiW/",
            icon: "fas fa-cube",
            description: "3D powerpack used in industrial sea applications, showcasing its design and functionality. This model highlights the advanced engineering and user-friendly interface of the powerpack, making it a perfect fit for modern applications."
        }
         
        // Add more models here...
        //https://my.spline.design/untitledcopy-lcrvsksXNF40IIg9KbDVd99w/
    },
    
    // App settings
    settings: {
        defaultModel: "model5",
        autoLoad: true,
        showControls: true,
        showInfo: true
    },
    
    // UI customization
    ui: {
        theme: {
            primaryColor: "#667eea",
            secondaryColor: "#764ba2",
            backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            textColor: "#333",
            accentColor: "#667eea"
        },
        animations: {
            enabled: true,
            duration: 300
        }
    }
};

// Instructions for adding your models:
/*
1. Get your Spline iframe URL:
   - Open your Spline project
   - Click "Export" → "Web"
   - Copy the iframe URL (it should look like: https://my.spline.design/your-project-name/)

2. Add a new model entry:
   model4: {
       name: "Your Model Name",
       type: "3D Object", // or "3D Scene", "3D Environment", etc.
       url: "YOUR_IFRAME_URL_HERE",
       icon: "fas fa-cube", // Choose from Font Awesome icons
       description: "Description of your model"
   }

3. Add the corresponding dropdown item in index.html:
   <div class="dropdown-item" data-model="model4">
       <i class="fas fa-cube"></i>
       <span>Your Model Name</span>
   </div>

4. Save the files and refresh your browser
*/ 