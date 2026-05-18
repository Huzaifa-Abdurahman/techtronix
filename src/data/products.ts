export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    images?: string[];
    fullDescription: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Hydraulic Rock Splitter",
        slug: "hydraulic-rock-splitter",
        description: "Powerful hydraulic splitter for breaking rock and concrete products.",
        image: "/hydraulic_rock_splitter.png",
        fullDescription: "Our Hydraulic Rock Splitter provides powerful and precise splitting capabilities for rock excavation, concrete demolition, and hard stone breaking, delivering an alternative to conventional explosives and heavy breakers. It ensures high precision while operating with minimal noise, vibration, and dust, maximizing safety."
    },
    {
        id: "2",
        name: "Diamond Wire Saw Machine",
        slug: "diamond-wire-saw-machine",
        description: "Precision cutting of reinforced concrete, stone, and rocks.",
        image: "/diamond_wire_saw.png",
        fullDescription: "The Diamond Wire Saw Machine is engineered for ultra-precise and efficient cutting of reinforced concrete structures, large stone blocks, and solid rock formats. Offering versatile cutting directions and exceptional speed, it's widely deployed in bridge demolition, underwater cutting, and complex civil engineering projects."
    },
    {
        id: "3",
        name: "Concrete Hydrodemolition Robot",
        slug: "concrete-hydrodemolition-robot",
        description: "High pressure water drilling for concrete floors and surfaces production.",
        image: "/hydrodemolition_robot.png",
        fullDescription: "Designed for unparalleled concrete removal, the Concrete Hydrodemolition Robot utilizes ultra-high-pressure water jets to selectively remove deteriorated concrete without damaging the underlying rebar structure. It vastly improves worksite safety and significantly accelerates the preparation of concrete surfaces."
    },
    {
        id: "4",
        name: "Automated Core Drilling Rig",
        slug: "automated-core-drilling-rig",
        description: "Auto feed core drilling rig for extended concrete and asphalt.",
        image: "/core_drilling_rig.png",
        fullDescription: "Our Automated Core Drilling Rig is a top-tier solution for continuous and highly accurate drilling operations. Featuring intelligent auto-feed technology, it reduces operator fatigue and prolongs bit life while effortlessly handling deeply reinforced concrete and asphalt, making it indispensable for infrastructure testing."
    },
    {
        id: "5",
        name: "Non-Destructive Testing (NDT)",
        slug: "non-destructive-testing-ndt",
        description: "Automated NDT sensors for comprehensive testing of construction materials.",
        image: "/ndt_device.png",
        fullDescription: "Equipped with advanced sensors, our Non-Destructive Testing (NDT) equipment enables deep structural evaluations without compromising the physical integrity of the materials. From ultrasound to radiographic analysis, our NDT tools are vital for ensuring structural safety and regulatory compliance in modern construction."
    },
    {
        id: "6",
        name: "Geogrid Welding Machine",
        slug: "geogrid-welding-machine",
        description: "Automated welding system for manufacturing geogrid panels.",
        image: "/geogrid_welding.png",
        fullDescription: "The Geogrid Welding Machine offers high-frequency precision welding specifically designed for the production and joining of geogrid panels. Boasting an automated feeding and control system, it significantly enhances production rates, ensures uniform weld strength, and supports large-scale geosynthetic soil reinforcement operations."
    },
    {
        id: "7",
        name: "Plate Compactor",
        slug: "plate-compactor",
        description: "Vibratory plate compactor for soil, gravel, and asphalt compaction.",
        image: "/plate_compactor.png",
        fullDescription: "Our heavy-duty Vibratory Plate Compactor provides immense consolidation force designed to compress granular soils, crushed aggregate, and hot mixed asphalt. Built with a rugged baseplate and ergonomic handles, it guarantees exceptional maneuverability alongside long-lasting durability on demanding commercial sites."
    },
    {
        id: "8",
        name: "Down-the-Hole (DTH) Drilling Rig",
        slug: "down-the-hole-dth-drilling-rig",
        description: "Expert drilling system for deep rock and soil penetration.",
        image: "/dth_drilling.png",
        fullDescription: "The Down-the-Hole (DTH) Drilling Rig is an industrial powerhouse formulated for blasting hole drilling, water well drilling, and deep ground penetration. Combining high impact energy with advanced rotary mechanisms, it ensures straight, precise holes even through the most challenging hard rock compositions."
    },
    {
        id: "9",
        name: "Ground Penetrating Radar (GPR)",
        slug: "ground-penetrating-radar",
        description: "Non-destructive, high-speed road scanning for pavement structure evaluation and subsurface defect detection.",
        image: "/gpr_vehicle.jpg",
        fullDescription: "Ground Penetrating Radar (GPR) for road scanning is a non-destructive, high-speed, and cost-effective method used to evaluate pavement structure, determine layer thicknesses, and identify subsurface defects such as voids, moisture, and delamination. Road-specific GPR systems use high-frequency antennas (1–2 GHz) mounted on vehicles, enabling data collection at traffic speeds up to 80 km/h without disrupting flow. Key applications include: Pavement Thickness Mapping (accurate measurement of asphalt, base, and subbase layers), Void & Cavity Detection (identifying dangerous air gaps beneath pavement), Moisture Detection (locating areas of high moisture susceptibility contributing to pavement failure), and Forensic Surveys (analyzing existing road conditions to determine causes of damage). The system uses specialized software like RADAN 7 or ROAD Doctor to interpret and map data. Antennas range from 1 GHz to 2 GHz for high-resolution imaging, and the vehicle-mounted, air-launched, horn-antenna systems allow for safe, rapid, non-contact data acquisition."
    },
    {
        id: "10",
        name: "Under Bridge Inspection Vehicle (Platform Type)",
        slug: "under-bridge-inspection-vehicle",
        description: "High-performance under-bridge access platform for bridge inspection, repair, maintenance, and structural assessment.",
        image: "/bridge_inspection_vehicle.jpg",
        fullDescription: "The Platform Type Bridge Inspection Vehicle is a high-performance under-bridge access platform designed for bridge inspection, repair, maintenance, and structural assessment. Ideal for highway bridges, flyovers, metro bridges, canal bridges, steel bridges, and concrete structures. Key Features: High-strength steel + aluminum structure, 600 kg heavy platform capacity, German NBB wireless remote, imported hydraulic system, video monitoring + intercom, emergency hydraulic retract, operating range -20°C to +50°C, and fast inspection speed of 15 m/min. Technical Specifications: Horizontal Reach 15m/16m/18m/22m (variable reach platforms available), Load Capacity 600 kg, Drive 6x4, Fuel Diesel, Emission Euro 5, Max Speed 90 km/h. Safety Features include hydraulic locking cylinders, emergency pump system, emergency stop switch, stabilizer cylinders, mechanical vertical truss lock, and safety circuit interlock. Applications: Bridge structural inspections, bearing inspections, crack surveys, under deck repair, cable bridge inspection, and night bridge maintenance."
    },
    {
        id: "11",
        name: "Gujjar Khan NMC Underpass",
        slug: "gujjar-khan-nmc-underpass",
        description: "Complete end-to-end underpass construction project for BSM Developers.",
        image: "/Gujjar Khan NMC Underpass.JPG",
        fullDescription: "Client: BSM Developers. Scope: Complete end-to-end project. Included: Full construction of underpass, Site supervision and quality control, Supply of geogrid for soil stabilization and reinforcement. Impact: Delivered a durable, safe, and well-executed underpass infrastructure solution."
    },
    {
        id: "12",
        name: "Fast Falling Weight Deflectometer (FWD)",
        slug: "fast-falling-weight-deflectometer",
        description: "High-precision non-destructive testing for pavement structural evaluation.",
        image: "/Supply, Installation & Training of Fast Falling Weight Deflectometer (FWD).JPG",
        fullDescription: "The Fast Falling Weight Deflectometer (FWD) is a premier non-destructive testing solution designed to accurately measure pavement deflection and evaluate the structural capacity of road networks. Engineered for high-speed data acquisition, it provides critical insights for overlay design, quality control, and long-term infrastructure management. Ideal for road authorities and highway departments, this unit enables data-driven maintenance strategies that extend the lifespan of pavement assets."
    },
    {
        id: "13",
        name: "Biogas Flare System & Wastewater Treatment System",
        slug: "biogas-flare-wastewater-treatment-ruda",
        description: "Complete environmental solution for gas management and leachate treatment.",
        image: "/Supply of Biogas Flare System & Wastewater Treatment System – RUDA.JPG",
        fullDescription: "Our advanced Biogas Flare and Wastewater Treatment System provides a comprehensive environmental solution for landfill management and site revitalization. The Biogas Flare unit ensures the safe, efficient combustion of landfill gases, significantly reducing odors and greenhouse gas emissions. Integrated with a robust Wastewater Treatment module, the system effectively processes leachate and contaminated water, ensuring environmentally compliant discharge or reuse. This dual-action system is essential for sustainable waste management and environmental protection."
    },
    {
        id: "14",
        name: "Dual Fired Burner (Oil/Biogas)",
        slug: "dual-fired-burner",
        description: "Versatile industrial burner providing unmatched fuel flexibility and efficiency.",
        image: "/Crystalline Chemical Industries.JPG",
        fullDescription: "The Dual Fired Burner is a high-efficiency combustion system designed specifically for large-scale boiler operations. Engineered to support both oil and biogas, this versatile burner provides unmatched fuel flexibility and energy efficiency for industrial applications. Each system comes complete with an advanced Burner Management System (BMS) and precision gas trains, ensuring maximum operational safety and control. Whether upgrading existing infrastructure or installing new thermal plants, our dual-fired solution delivers reliable, sustainable power."
    },
    {
        id: "15",
        name: "Profilograph",
        slug: "profilograph",
        description: "Precision instrumentation for measuring road surface smoothness.",
        image: "/Supply, Installation & Training of Profilograph.JPG",
        fullDescription: "The Profilograph is an essential precision instrument for measuring road surface smoothness and ride quality with scientific accuracy. Designed for high-performance quality assurance, it allows engineers to conduct acceptance testing on newly constructed or rehabilitated highways with confidence. By providing detailed profile maps, it ensures that pavements meet the most stringent national standards for rideability and structural uniformity. It is the preferred choice for highway authorities and construction consultants focused on infrastructure excellence."
    },
    {
        id: "16",
        name: "Geogrid",
        slug: "geogrid",
        description: "High-strength geosynthetic material for soil and aggregate reinforcement.",
        image: "/geogrid-1.JPG",
        images: ["/geogrid-1.JPG", "/geogrid-2.JPG", "/geogrid-3.JPG", "/geogrid-4.JPG"],
        fullDescription: `
Geogrid is a high-strength geosynthetic material with an open grid-like structure used to reinforce soils and aggregates. It plays a vital role in civil, geotechnical, and transportation engineering, especially in areas with soft or weak subgrades. Made from durable polymers such as polypropylene, polyester, or HDPE, geogrids are designed to interlock with soil or aggregate particles, improving load distribution, reducing settlement, and increasing overall structural integrity.

Monoaxial Geogrid
Monoaxial geogrids are produced from high-strength polymers such as HDPE or polyester, which are stretched in a single direction to maximize tensile performance. These geogrids are specifically engineered for soil reinforcement in wall and slope applications where forces act predominantly along one axis.

Key Benefits:
• High tensile capacity in the machine direction: Designed to resist tension along a single axis, monoaxial geogrids are ideal for retaining walls and slopes.
• Enables steep slope and vertical wall construction: Allows for safe construction of near-vertical walls or steep embankments.
• Cost-effective alternative: Requires fewer materials and less labor than traditional concrete systems.
• Long-term resistance: Excellent resistance to chemical and biological degradation, extreme pH levels, and biological attack.

Typical Applications:
• Mechanically Stabilized Earth (MSE) walls
• Steep slopes and embankments
• Bridge abutment support structures
• Landfill berms and vertical expansion zones

Biaxial Geogrid
Biaxial geogrids are manufactured through a process of extrusion, punching, and stretching polypropylene sheets. The resulting grid structure provides balanced strength in both directions, making it highly effective for subgrade stabilization and even load distribution.

Key Benefits:
• Improves load-bearing capacity: Stabilizes weak subgrades by distributing loads evenly.
• Reduces thickness requirements: Required bearing capacity can be achieved using a thinner layer of base material.
• Controls rutting and differential settlement: Prevents aggregate displacement under repeated traffic loads.
• Enhances performance: Contributes to longer-lasting pavements with less maintenance.

Typical Applications:
• Road and highway base reinforcement
• Parking lots and airport taxiways
• Temporary site access roads and working platforms
• Railway ballast reinforcement

Key Functions of Geogrids:
• Reinforcement – Increases tensile strength of soil.
• Stabilization – Locks aggregates in place.
• Load Distribution – Spreads applied loads over a larger area.
• Separation & Erosion Control – Prevents material mixing when used with geotextiles.
        `
    },
    {
        id: "17",
        name: "Geonet",
        slug: "geonet",
        description: "Three-dimensional grid-like material for high-capacity liquid and gas drainage.",
        image: "/geonet-1.JPG",
        images: ["/geonet-1.JPG", "/geonet-2.JPG", "/geonet-3.JPG"],
        fullDescription: `
Geonets are three-dimensional, grid-like polymeric geosynthetic materials designed for high-capacity in-plane drainage of liquids and gases. Manufactured primarily from high-density polyethylene (HDPE), they consist of parallel, intersecting ribs that form open, conductive channels. These products are essential in landfill, mining, and construction projects for drainage, soil erosion control, and reinforcement.

Key Features and Functions:
• Drainage – Facilitates the lateral flow of water or gas, such as in leachate collection systems.
• Structure – Features bi-planar or tri-planar rib configurations that provide excellent compressive strength and high flow rates.
• Applications – Commonly used in landfill liners, heap leach pads in mining, road base stabilization, retaining wall drainage, and tunnel waterproofing.
• Geocomposites – Geonets are often combined with nonwoven geotextiles to form a geocomposite, offering both filtration (to prevent clogging) and high-flow drainage in a single product.
• Materials – Typically made from HDPE or polypropylene, providing high chemical resistance and long-term durability in harsh environments.

Types of Geonets:
• Biplanar Geonet: Standard two-dimensional rib structure for reliable flow.
• Triplanar Geonet: Advanced three-dimensional structure for superior flow capacity and compression resistance.
        `
    },
    {
        id: "new-1",
        name: "Highways",
        slug: "highways",
        description: "We provide advanced Highway Engineering Solutions, including Non-Destructive Testing (NDT) Equipment and Intelligent Transportation Systems (ITS) for efficient traffic management.",
        image: "/h1.jpeg",
        images: ["/h1.jpeg", "/h2.jpeg", "/h3.jpeg", "/h4.jpeg"],
        fullDescription: "We provide advanced Highway Engineering Solutions, including Non-Destructive Testing (NDT) Equipment and Intelligent Transportation Systems (ITS) for efficient traffic management.\n\nOur Solutions Include:\n• Supply, Installation & Training of Ground Penetrating Radar\n• Supply & Training of Under Bridge Inspection Unit\n• KUAB FWD 50"
    },
    {
        id: "new-2",
        name: "Geosynthetics",
        slug: "geosynthetics",
        description: "We specialize in Geosynthetic Solutions for infrastructure projects such as MSE walls, landfill capping, and slope stabilization.",
        image: "/g1.jpeg",
        images: ["/g1.jpeg", "/g2.jpeg", "/g3.jpeg"],
        fullDescription: "We specialize in Geosynthetic Solutions for infrastructure projects such as MSE walls, landfill capping, and slope stabilization.\n\nOur Product Range:\n• HDPE Geogrids (Biaxial & Uniaxial)\n• Geotextiles\n• Geobags\n• Geonets\n• Triplanar Geonets\n• Geofilters"
    },
    {
        id: "new-3",
        name: "Solid & Liquid Waste Treatment",
        slug: "solid-liquid-waste-treatment",
        description: "We provide specialized equipment and solutions for solid waste management and wastewater treatment systems.",
        image: "/solid.jpeg",
        fullDescription: "We provide specialized equipment and solutions for solid waste management and wastewater treatment systems.\n\nOur Offerings:\n• Solid Waste Incinerators\n• Solid Waste Separators\n• Leachate Treatment Systems\n• Landfill Gas (LFG) Collection & Flare Systems\n• Leachate Pumps"
    },
    {
        id: "new-4",
        name: "General Engineering Items",
        slug: "general-engineering-items",
        description: "We provide sourcing of high-quality engineering products for clients in the industrial and power sectors, tailored to their specific requirements.",
        image: "/hv.jpeg",
        images: ["/hv.jpeg", "/lv.jpeg"],
        fullDescription: "We offer a wide range of engineering products and infrastructure solutions.\n\nOur Supplies Include:\n• 132 kV Grid Station Equipment\n• Steel Molds\n• Structural Steel Members\n• Power Cables\n• Computer Servers"
    },
    {
        id: "new-5",
        name: "Construction Management & Execution Services",
        slug: "construction-management-execution",
        description: "We offer flexible and comprehensive construction management services tailored to the specific needs of each project.",
        image: "/s1.jpeg",
        fullDescription: "At Tech Tronix Solutions (TTS), we offer flexible and comprehensive construction management services tailored to the specific needs of each project. Our scope covers the entire project lifecycle, from basic documentation and planning support to detailed site execution drawings and final as-built completion drawings. We can manage complete project delivery or contribute to specific phases, including back-office documentation, project coordination, and on-site execution management.\n\nOur approach is driven by Digital Construction Management, integrating modern tools for planning, coordination, and real-time project control. Through Smart Planning & Cost Control, we optimize resources, reduce delays, and improve project efficiency. We ensure strict Quality Assurance & Technical Monitoring to maintain compliance with standards and deliver reliable outcomes. In addition, Technology-Driven Site Supervision enhances on-site accuracy, productivity, and informed decision-making throughout the execution phase.\n\nWhether acting as a full project partner or providing targeted support, we ensure precision, efficiency, and professionalism at every stage of the project lifecycle.\n\n• Digital Construction Management\n• Smart Planning & Cost Control\n• Quality Assurance & Technical Monitoring\n• Technology-Driven Site Supervision"
    },
    {
        id: "new-6",
        name: "BIM Services",
        slug: "bim-design-clash-detection",
        description: "We deliver advanced digital design and coordination solutions for modern construction projects using Building Information Modeling (BIM).",
        image: "/s2.jpeg",
        fullDescription: "At Tech Tronix Solutions (TTS), we have a dedicated team of experienced civil engineers specialized in Building Information Modeling (BIM), delivering advanced digital design and coordination solutions for modern construction projects. Our BIM expertise enables us to develop intelligent 3D models that improve design accuracy, enhance collaboration among stakeholders, and support efficient project planning and execution. By integrating engineering knowledge with digital technologies, we help clients reduce design conflicts, optimize resources, and improve overall project outcomes from concept to completion.\n\nWithin the BIM domain, we provide a range of specialized services including 3D modeling, clash detection and coordination, construction sequencing (4D), cost integration (5D), quantity take-offs, shop drawings, and as-built modeling for project handover and facility management support.\n\nKey BIM Services:\n• 3D Architectural, Structural & MEP Modeling\n• Clash Detection and Multi-Discipline Coordination\n• Construction Sequencing & Project Visualization\n• Quantity Take-offs, Shop Drawings & As-Built Modeling"
    },
    {
        id: "new-7",
        name: "Surveying & Modelling Services",
        slug: "surveying-photogrammetry",
        description: "Our Surveying & Photogrammetry services provide high-resolution aerial surveys and integrated 3D scanning for infrastructure and buildings.",
        image: "/s3.jpeg",
        fullDescription: "At Tech Tronix Solutions (TTS), our Surveying & Photogrammetry services are focused on two key advanced domains. We provide Oblique Drone Photogrammetry for Urban Modeling, delivering high-resolution aerial surveys that generate detailed 3D urban landscape models for cities and large-scale environments. For buildings and structures, we offer Integrated Building 3D Scanning, combining oblique photogrammetry with handheld LiDAR scanning to produce precise and complete digital twins for design, analysis, and asset management.\n\nIn the field of transportation infrastructure, we specialize in Advanced Highway Condition Assessment using laser scanning, AI-based imaging systems, Ground Penetrating Radar (GPR), and Falling Weight Deflectometer (FWD) testing. This enables Data-Driven Infrastructure Diagnostics, providing comprehensive structural evaluation and condition monitoring of roads and bridges to support maintenance planning, rehabilitation strategies, and long-term asset management decisions.\n\nKey Services:\n• Oblique Drone Photogrammetry for Urban Modeling\n• Integrated Building 3D Scanning\n• Advanced Highway Condition Assessment\n• Data-Driven Infrastructure Diagnostics"
    },
    {
        id: "new-8",
        name: "Steel Structures and Steel Formwork",
        slug: "steel-structure-design-mold-engineering",
        description: "We specialize in delivering advanced engineering solutions in steel structures and steel formwork systems.",
        image: "/s4.jpeg",
        fullDescription: "At Tech Tronix Solutions, we specialize in delivering advanced engineering solutions in steel structures and steel formwork systems, developed through close coordination between our in-house design team and international suppliers from China and the Middle East, who execute full EPC (Engineering, Procurement & Construction) for these specialized works. This integrated approach allows us to align innovative design concepts with global fabrication capabilities, ensuring efficient, reliable, and high-quality execution of complex engineering projects.\n\nOur partners deliver turnkey EPC solutions for major steel works, including precision-engineered steel molds for casting U-Tub girders and transoms, as well as large-scale tubular dome structures. In addition, they provide advanced electrical retractable roof systems for large arenas, combining structural, mechanical, and electrical engineering expertise to meet international standards for stadium and mega infrastructure developments.\n\nKey Services:\n• Coordinated Design & EPC Delivery of Large-Scale Steel Formwork Systems (U-Tub Girders & Transoms)\n• Turnkey Engineering Solutions for Complex Structural Steel Fabrication Projects\n• Design-Integrated EPC Execution of Large Tubular Dome Structures\n• Electrical Retractable Roof Systems for Stadiums & Large Arenas"
    }
];
