import {MenuItem} from './menuItem';

export const menuItems : MenuItem[] = [ 
    { 
        "id": 1,
        "level": 0, 
        "label": "Region Americas", 
        "icon": "fa-globe", 
        "charts": [], 
        "children": [ 
            { 
                "id": 2, 
                "icon": "fa-check-circle", 
                "level": 1, 
                "label": "Quality", 
                "charts": [], 
                "children": [ 
                    { 
                        "id": 2, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Customer Complaints", 
                        "charts": [ 
                            "1_Chart 1.jpg", 
                            "2_Chart 2.jpg" 
                        ], 
                        "children": [] 
                    }, 
                    { 
                        "id": 2, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Scrap", 
                        "charts": [ 
                            "3_Chart 1.jpg", 
                            "4_Chart 3.jpg" 
                        ], 
                        "children": [] 
                    }, 
                    { 
                        "id": 2, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Material Consumption Variance", 
                        "charts": [ 
                            "8_Chart 6.jpg", 
                            "7_Chart 2.jpg" 
                        ], 
                        "children": [] 
                    }, 
                    { 
                        "id": 2, 
                        "icon": "", 
                        "level": 2, 
                        "label": "External Sorting Cost", 
                        "charts": [], 
                        "children": [] 
                    }, 
                    { 
                        "id": 2, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Supplier Complaints", 
                        "charts": [], 
                        "children": [] 
                    } 
                ] 
            }, 
            { 
                "id": 3, 
                "icon": "fa-money", 
                "level": 1, 
                "label": "Cost", 
                "charts": [], 
                "children": [ 
                    { 
                        "id": 2, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Inventory", 
                        "charts": [ 
                            "5_Chart 1.jpg", 
                            "6_Chart 2.jpg" 
                        ], 
                        "children": [] 
                    }, 
                    { 
                        "id": 4, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Direct Personnel Deviation", 
                        "charts": [ 
                            "9_Chart 1.jpg" 
                        ], 
                        "children": [] 
                    }, 
                    { 
                        "id": 4, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Value Added", 
                        "charts": [ 
                            "12_Chart 3.jpg", 
                            "13_Chart 4.jpg" 
                        ], 
                        "children": [] 
                    } 
                ] 
            }, 
            { 
                "id": 3, 
                "icon": "fa-truck", 
                "level": 1, 
                "label": "Delivery", 
                "charts": [], 
                "children": [ 
                    { 
                        "id": 4, 
                        "icon": "", 
                        "level": 2, 
                        "label": "Delivery", 
                        "charts": [ 
                            "10_Chart 4.jpg", 
                            "11_Chart 5.jpg" 
                        ], 
                        "children": [] 
                    } 
                ] 
            } 
        ] 
    }, 
    { 
        "id" : 1,
        "level" : 0,
        "label" : "Business Divisions",
        "icon" : "fa-pie-chart",
        "charts" : [],
        "children" : [
            {

                "id": 1, 
                "level": 0, 
                "label": "Automotive", 
                "icon": "fa-car", 
                "charts": [], 
                "children": [ 
                    { 
                        "id": 2, 
                        "icon": "fa-check-circle", 
                        "level": 1, 
                        "label": "Quality", 
                        "charts": [], 
                        "children": [ 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Customer Complaints", 
                                "charts": [ 
                                    "1_Chart1.jpg", 
                                    "2_Chart 2.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Scrap", 
                                "charts": [ 
                                    "3_Chart 1.jpg", 
                                    "4_Chart 3.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Material Consumption Variance", 
                                "charts": [ 
                                    "8_Chart 6.jpg", 
                                    "7_Chart 2.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "External Sorting Cost", 
                                "charts": [], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Supplier Complaints", 
                                "charts": [], 
                                "children": [] 
                            } 
                        ] 
                    }, 
                    { 
                        "id": 3, 
                        "icon": "fa-money", 
                        "level": 1, 
                        "label": "Cost", 
                        "charts": [], 
                        "children": [ 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Inventory", 
                                "charts": [ 
                                    "5_Chart 1.jpg", 
                                    "6_Chart 2.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 4, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Direct Personnel Deviation", 
                                "charts": [ 
                                    "9_Chart 1.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 4, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Value Added", 
                                "charts": [ 
                                    "12_Chart 3.jpg", 
                                    "13_Chart 4.jpg" 
                                ], 
                                "children": [] 
                            } 
                        ] 
                    }, 
                    { 
                        "id": 3, 
                        "icon": "fa-truck", 
                        "level": 1, 
                        "label": "Delivery", 
                        "charts": [], 
                        "children": [ 
                            { 
                                "id": 4, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Delivery", 
                                "charts": [ 
                                    "10_Chart 4.jpg", 
                                    "11_Chart 5.jpg" 
                                ], 
                                "children": [] 
                            } 
                        ] 
                    } 
                ]
            },
            {

                "id": 1, 
                "level": 0, 
                "label": "Industrial", 
                "icon": "fa-industry", 
                "charts": [], 
                "children": [ 
                    { 
                        "id": 2, 
                        "icon": "fa-check-circle", 
                        "level": 1, 
                        "label": "Quality", 
                        "charts": [], 
                        "children": [ 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Customer Complaints", 
                                "charts": [ 
                                    "1_Chart1.jpg", 
                                    "2_Chart 2.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Scrap", 
                                "charts": [ 
                                    "3_Chart 1.jpg", 
                                    "4_Chart 3.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Material Consumption Variance", 
                                "charts": [ 
                                    "8_Chart 6.jpg", 
                                    "7_Chart 2.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "External Sorting Cost", 
                                "charts": [], 
                                "children": [] 
                            }, 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Supplier Complaints", 
                                "charts": [], 
                                "children": [] 
                            } 
                        ] 
                    }, 
                    { 
                        "id": 3, 
                        "icon": "fa-money", 
                        "level": 1, 
                        "label": "Cost", 
                        "charts": [], 
                        "children": [ 
                            { 
                                "id": 2, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Inventory", 
                                "charts": [ 
                                    "5_Chart 1.jpg", 
                                    "6_Chart 2.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 4, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Direct Personnel Deviation", 
                                "charts": [ 
                                    "9_Chart 1.jpg" 
                                ], 
                                "children": [] 
                            }, 
                            { 
                                "id": 4, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Value Added", 
                                "charts": [ 
                                    "12_Chart 3.jpg", 
                                    "13_Chart 4.jpg" 
                                ], 
                                "children": [] 
                            } 
                        ] 
                    }, 
                    { 
                        "id": 3, 
                        "icon": "fa-truck", 
                        "level": 1, 
                        "label": "Delivery", 
                        "charts": [], 
                        "children": [ 
                            { 
                                "id": 4, 
                                "icon": "", 
                                "level": 2, 
                                "label": "Delivery", 
                                "charts": [ 
                                    "10_Chart 4.jpg", 
                                    "11_Chart 5.jpg" 
                                ], 
                                "children": [] 
                            } 
                        ] 
                    } 
                ]
            }
        ]
    } 
]
