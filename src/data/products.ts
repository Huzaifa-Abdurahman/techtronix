export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
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
        description: "Non-destructive testing to measure pavement deflection and calculate structural capacity.",
        image: "/Supply, Installation & Training of Fast Falling Weight Deflectometer (FWD).JPG",
        fullDescription: "Project: Supply, Installation & Training of Fast Falling Weight Deflectometer (FWD). Client: KPK RAMS (Road Assets Management System, Khyber Pakhtunkhwa). Purpose: Non-destructive testing to measure pavement deflection and calculate structural capacity. Application: Road network evaluation, overlay design, and quality control. Impact: Enabled data-driven pavement maintenance strategies for KPK road assets."
    },
    {
        id: "13",
        name: "Biogas Flare System & Wastewater Treatment System",
        slug: "biogas-flare-wastewater-treatment-ruda",
        description: "Critical environmental systems for landfill revitalization.",
        image: "/Supply of Biogas Flare System & Wastewater Treatment System – RUDA.JPG",
        fullDescription: "Project: Supply of Biogas Flare System & Wastewater Treatment System – RUDA. Supplied two critical environmental systems to the Ravi Urban Development Authority (RUDA) for the Revitalization of Mehmood Booty Landfill Site. Biogas Flare System – Provided for safe combustion of landfill biogas, enabling odor control and greenhouse gas reduction. Wastewater Treatment System – Supplied to treat leachate and contaminated water from the landfill, ensuring safe discharge or reuse. Together, these solutions supported RUDA's landfill revitalization efforts through compliant biogas management and effective wastewater treatment."
    },
    {
        id: "14",
        name: "Dual Fired Burner (Oil/Biogas)",
        slug: "dual-fired-burner",
        description: "Supply of Dual Fired Burner (Oil/Biogas) for 20 TPH Boiler.",
        image: "/Crystalline Chemical Industries.JPG",
        fullDescription: "Project: Supply of Dual Fired Burner (Oil/Biogas) for 20 TPH Boiler. Client: Crystalline Chemical Industries. Scope: Supply, installation, and operation training. Included Components: Complete system including Burner Management System (BMS) and gas trains. Outcome: Enables efficient boiler operation using either oil or biogas, providing fuel flexibility, energy efficiency, and operational safety."
    },
    {
        id: "15",
        name: "Profilograph",
        slug: "profilograph",
        description: "Measuring road surface smoothness and ride quality.",
        image: "/Supply, Installation & Training of Profilograph.JPG",
        fullDescription: "Project: Supply, Installation & Training of Profilograph. Client: National Highway Authority (NHA). Equipment: Profilograph. Purpose: Measuring road surface smoothness and ride quality. Application: Quality assurance and acceptance testing of newly constructed or rehabilitated highways. Impact: Supports NHA in ensuring roads meet required profile standards."
    }
];
