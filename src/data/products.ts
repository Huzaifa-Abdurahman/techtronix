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
    }
];
