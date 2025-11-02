// UAEI Technology Stack Presentation Data
// Modal content database

const technologyStackData = {
    overview: {
        products: 8,
        capex: 309600000,
        dataMoat: 2000000000,
        aiCostSavings: 0.90
    },
    products: [
        {
            id: 1,
            name: 'AgriFresh Marketplace',
            icon: 'store',
            revenue: 850000000,
            year: 5,
            features: [
                'B2C marketplace (farmers → consumers)',
                '11 SA languages + AI chat',
                'Real-time pricing + demand forecasting'
            ]
        },
        {
            id: 2,
            name: 'AgriFresh Pro (B2B)',
            icon: 'handshake',
            revenue: 400000000,
            year: 5,
            features: [
                'Institutional buyer platform',
                'Contract farming module',
                'Quality certification system'
            ]
        },
        {
            id: 3,
            name: 'SWARM Network',
            icon: 'network-wired',
            revenue: 320000000,
            year: 5,
            features: [
                'IoT sensor network',
                'Real-time crop monitoring',
                'Predictive analytics'
            ]
        },
        {
            id: 4,
            name: 'FarmerCredit AI',
            icon: 'brain',
            revenue: 280000000,
            year: 5,
            features: [
                'Alternative credit scoring',
                'Behavioral data analysis',
                'Default prediction (≥75% accuracy)'
            ]
        },
        {
            id: 5,
            name: 'Logistics Platform',
            icon: 'truck',
            revenue: 250000000,
            year: 5,
            features: [
                'Fleet management system',
                'Route optimization',
                'Last-mile delivery tracking'
            ]
        },
        {
            id: 6,
            name: 'Conservation Tech',
            icon: 'leaf',
            revenue: 180000000,
            year: 5,
            features: [
                'Conservation agriculture platform',
                'Yield optimization algorithms',
                'Carbon credit tracking'
            ]
        },
        {
            id: 7,
            name: 'Knowledge Hub',
            icon: 'graduation-cap',
            revenue: 120000000,
            year: 5,
            features: [
                'AI-powered training modules',
                'Video library (11 languages)',
                'Certification programs'
            ]
        },
        {
            id: 8,
            name: 'Data Intelligence',
            icon: 'chart-line',
            revenue: 100000000,
            year: 5,
            features: [
                'Agricultural data marketplace',
                'Predictive market insights',
                'Research partnership platform'
            ]
        }
    ],
    aiModels: [
        {
            name: 'GLM-4.5V (Zhipu AI)',
            use: 'Multilingual chat (11 SA languages)',
            cost: '$1.50/1M tokens',
            advantage: 'Native African language support',
            savingsVsGPT4: '90%'
        },
        {
            name: 'MiniCPM-V 2.6',
            use: 'Image recognition (crop disease, quality grading)',
            cost: '$0.80/1M tokens',
            advantage: 'On-device processing (no internet required)',
            savingsVsGPT4: '95%'
        },
        {
            name: 'Qwen3-72B',
            use: 'Credit scoring, fraud detection',
            cost: '$2/1M tokens',
            advantage: 'Financial data expertise',
            savingsVsGPT4: '87%'
        },
        {
            name: 'Kimi K2 (Moonshot AI)',
            use: 'Long-context analysis (farmer histories)',
            cost: '$1.20/1M tokens',
            advantage: '200k token context window',
            savingsVsGPT4: '92%'
        },
        {
            name: 'MiniMax M2 (Abab 7)',
            use: 'Voice assistance (hands-free farming)',
            cost: '$0.50/1M tokens',
            advantage: 'Natural voice + 11 SA languages',
            savingsVsGPT4: '97%'
        },
        {
            name: 'DeepSeek V3',
            use: 'Climate modeling, yield prediction',
            cost: '$0.30/1M tokens',
            advantage: 'Cheapest inference for large-scale analysis',
            savingsVsGPT4: '98%'
        }
    ],
    capex: {
        total: 309600000,
        technologyPlatforms: {
            amount: 124800000,
            percentage: 40,
            breakdown: {
                agrifreshMarketplace: 36000000,
                swarmNetwork: 24000000,
                farmerCreditAI: 18000000,
                logisticsPlatform: 15000000,
                conservationTech: 12000000,
                knowledgeHub: 9600000,
                dataIntelligence: 10200000
            }
        },
        fleetAcquisition: {
            amount: 49536000,
            percentage: 16,
            breakdown: {
                pickupTrucks: 28800000,
                refrigeratedTrucks: 14400000,
                motorcycles: 6336000
            }
        },
        equipmentProcurement: {
            amount: 99072000,
            percentage: 32,
            breakdown: {
                iotSensors: 30000000,
                smartphones: 25000000,
                conservationEquipment: 24072000,
                qualityTestingLabs: 20000000
            }
        },
        conservationAgriculture: {
            amount: 12384000,
            percentage: 4,
            breakdown: {
                seedStock: 6000000,
                fertilizers: 4384000,
                training: 2000000
            }
        },
        itInfrastructure: {
            amount: 21672000,
            percentage: 7,
            breakdown: {
                cloudServices: 12000000,
                cybersecurity: 5672000,
                backupSystems: 4000000
            }
        }
    },
    dataMoat: {
        year5Value: 2000000000,
        messages: 456000000,
        farmerYears: 250000,
        transactions: 75000000,
        hectaresMonitored: 750000,
        insights: [
            'Credit behavior patterns (250k farmer-years)',
            'Yield optimization algorithms (750k hectares)',
            'Market demand forecasting (75M transactions)',
            'Climate adaptation strategies (456M messages)'
        ]
    },
    macDevelopment: {
        strategy: 'Hardware-Based Compatibility',
        investment: 840000,
        approach: [
            'Company-issued Apple hardware to all developers',
            'M3 MacBook Airs (R18k × 30 developers = R540k)',
            'iPhone 16s for mobile testing (R15k × 20 = R300k)',
            'No macOS VM overhead (native performance)',
            'Future-proof for Apple Silicon ecosystem'
        ],
        savings: 'No VM licensing, no performance degradation, 100% native macOS/iOS compatibility'
    },
    timeline: {
        year1: [
            'AgriFresh Marketplace MVP (6 languages)',
            'SWARM Network deployment (5,000 sensors)',
            'FarmerCredit AI pilot (10,000 farmers)',
            'Fleet acquisition (480 pickups)'
        ],
        year2: [
            'AgriFresh Pro launch (B2B contracts)',
            'SWARM expansion (25,000 sensors)',
            'Logistics Platform deployment',
            'Conservation Tech rollout'
        ],
        year3: [
            'Knowledge Hub launch (11 languages)',
            'Full AI model deployment (6 models)',
            'Data Intelligence marketplace beta',
            'Carbon credit tracking system'
        ],
        year4: [
            'AgriFresh international expansion',
            'Advanced predictive analytics',
            'Research partnerships activation',
            'Quality certification system'
        ],
        year5: [
            'Full ecosystem maturity',
            'R2B+ data moat value realized',
            'Export to SADC markets',
            'IPO readiness achieved'
        ]
    },
    techStack: {
        frontend: [
            'Next.js 14 (React framework)',
            'Tailwind CSS (responsive design)',
            'Chart.js (data visualization)',
            'Progressive Web App (offline-first)'
        ],
        backend: [
            'Node.js + Express (API server)',
            'Python FastAPI (AI/ML services)',
            'GraphQL (efficient data queries)',
            'Redis (caching layer)'
        ],
        aiML: [
            'GLM-4.5V (multilingual chat)',
            'MiniCPM-V 2.6 (image recognition)',
            'Qwen3-72B (credit scoring)',
            'TensorFlow (custom models)',
            'LangChain (AI orchestration)'
        ],
        database: [
            'PostgreSQL (transactional data)',
            'MongoDB (IoT sensor data)',
            'TimescaleDB (time-series analytics)',
            'Elasticsearch (search engine)'
        ],
        infrastructure: [
            'AWS (primary cloud)',
            'Cloudflare (CDN + security)',
            'Docker + Kubernetes (containerization)',
            'GitHub Actions (CI/CD)'
        ],
        iot: [
            'MQTT (sensor communication)',
            'LoRaWAN (long-range connectivity)',
            'Edge computing (on-farm processing)',
            'Raspberry Pi (local hubs)'
        ]
    },
    targetAudience: 'Technical investors (TIA, IDC, DBSA)',
    rating: 9.5
};
