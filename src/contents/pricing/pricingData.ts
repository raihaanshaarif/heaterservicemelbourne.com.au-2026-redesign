

interface PricingPlan {
    id: number;
    title: string;
    price: string;
    period: string;
    iconClass: string;
    animationVariant: 'fadeInLeft' | 'fadeInUp' | 'fadeInRight';
    delay: number;
    features: string[];
}

export const pricingData: PricingPlan[] = [
    {
        id: 1,
        title: "Road Cargo",
        price: "$199.99",
        period: "/Mo",
        iconClass: "icon-shipment",
        animationVariant: "fadeInLeft",
        delay: 100,
        features: [
            "Pickup and delivery",
            "Custom coverage",
            "Customer Management",
            "Deliver in 2-3 days",
            "24 Hours Support"
        ]
    },
    {
        id: 2,
        title: "Sea Freight",
        price: "$299.99",
        period: "/Mo",
        iconClass: "icon-international-shipping",
        animationVariant: "fadeInUp",
        delay: 300,
        features: [
            "Pickup and delivery",
            "Custom coverage",
            "Customer Management",
            "Deliver in 2-3 days",
            "24 Hours Support"
        ]
    },
    {
        id: 3,
        title: "Ship Cargo",
        price: "$399.99",
        period: "/Mo",
        iconClass: "icon-ship",
        animationVariant: "fadeInRight",
        delay: 500,
        features: [
            "Pickup and delivery",
            "Custom coverage",
            "Customer Management",
            "Deliver in 2-3 days",
            "24 Hours Support"
        ]
    }
];
