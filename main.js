import { Search } from "lucide-react";
import React, { useState } from "react";

const TechnicalSchematicWiki = () => {
    const [activeSection, setActiveSection] = useState("main");
    const [menuOpen, setMenuOpen] = useState(false);

    const primaryColor = "#052440"; // Dark blue
    const secondaryColor = "#1a4b7c"; // Medium blue
    const accentColor = "#0f7cad"; // Light blue
    const highlightColor = "#e06f1f"; // Orange
    const textColor = "#f2f2f2"; // Light gray/white

    const fontFamily = "monospace";

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const renderHeader = () => {
        return (
            <header
                style={{
                    backgroundColor: primaryColor,
                    color: textColor,
                    fontFamily,
                    borderBottom: `1px solid ${secondaryColor}`,
                }}
            >
                <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="md:hidden mr-4 cursor-pointer" onClick={toggleMenu} style={{ color: highlightColor }}>
                            ≡
                        </div>
                        <div className="flex items-center">
                            <div
                                style={{
                                    color: highlightColor,
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                                    letterSpacing: "2px",
                                }}
                            >
                                DUNE://WIKI
                            </div>
                            <div
                                style={{
                                    color: accentColor,
                                    fontSize: "0.7rem",
                                    marginLeft: "0.5rem",
                                    letterSpacing: "1px",
                                }}
                            >
                                TECH.SCHEMATIC_v1.0
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <NavItem label="INDEX" active={activeSection === "index"} onClick={() => setActiveSection("index")} />
                        <NavItem label="HOUSES" active={activeSection === "houses"} onClick={() => setActiveSection("houses")} />
                        <NavItem label="PLANETS" active={activeSection === "planets"} onClick={() => setActiveSection("planets")} />
                        <NavItem label="TECH" active={activeSection === "tech"} onClick={() => setActiveSection("tech")} />
                        <NavItem label="CHARACTERS" active={activeSection === "characters"} onClick={() => setActiveSection("characters")} />
                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="SEARCH DATABASE"
                                className="py-1 px-3 pr-8 text-sm rounded-none"
                                style={{
                                    backgroundColor: "rgba(15, 124, 173, 0.2)",
                                    border: `1px solid ${accentColor}`,
                                    color: textColor,
                                    fontFamily,
                                    width: "180px",
                                    outline: "none",
                                }}
                            />
                            <Search size={16} className="absolute right-2 top-1.5" style={{ color: accentColor }} />
                        </div>
                    </div>
                </div>
            </header>
        );
    };

    const NavItem = ({ label, active, onClick }) => (
        <div
            className="cursor-pointer text-sm py-1 px-2"
            onClick={onClick}
            style={{
                color: active ? highlightColor : textColor,
                borderBottom: active ? `2px solid ${highlightColor}` : "none",
                fontWeight: active ? "bold" : "normal",
                letterSpacing: "1px",
            }}
        >
            {label}
        </div>
    );

    const renderSidebar = () => {
        return (
            <div
                className={`fixed md:relative top-0 left-0 h-full z-10 transition-all duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
                style={{
                    backgroundColor: primaryColor,
                    borderRight: `1px solid ${secondaryColor}`,
                    width: "260px",
                    fontFamily,
                }}
            >
                <div className="p-4 md:pt-20">
                    <div className="mb-6">
                        <div
                            style={{
                                color: highlightColor,
                                fontSize: "0.8rem",
                                borderBottom: `1px solid ${secondaryColor}`,
                                paddingBottom: "0.5rem",
                                marginBottom: "0.5rem",
                                letterSpacing: "1px",
                            }}
                        >
                            SYSTEM NAVIGATION
                        </div>
                        <div className="flex flex-col gap-1">
                            <SidebarItem label="MAIN INTERFACE" active={activeSection === "main"} onClick={() => setActiveSection("main")} />
                            <SidebarItem
                                label="ATREIDES RECORDS"
                                active={activeSection === "atreides"}
                                onClick={() => setActiveSection("atreides")}
                            />
                            <SidebarItem label="HARKONNEN RECORDS" active={false} onClick={() => {}} />
                            <SidebarItem label="FREMEN ARCHIVES" active={false} onClick={() => {}} />
                            <SidebarItem label="BENE GESSERIT LOGS" active={false} onClick={() => {}} />
                            <SidebarItem label="IMPERIAL REGISTRY" active={false} onClick={() => {}} />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div
                            style={{
                                color: highlightColor,
                                fontSize: "0.8rem",
                                borderBottom: `1px solid ${secondaryColor}`,
                                paddingBottom: "0.5rem",
                                marginBottom: "0.5rem",
                                letterSpacing: "1px",
                            }}
                        >
                            CURRENT FILE METRICS
                        </div>
                        <div className="flex flex-col gap-1" style={{ fontSize: "0.75rem", color: accentColor }}>
                            <div className="flex justify-between">
                                <span>TOTAL ENTRIES:</span>
                                <span>6,214</span>
                            </div>
                            <div className="flex justify-between">
                                <span>LAST UPDATE:</span>
                                <span>10934.16.3</span>
                            </div>
                            <div className="flex justify-between">
                                <span>CONNECTION:</span>
                                <span style={{ color: highlightColor }}>SECURE</span>
                            </div>
                            <div className="flex justify-between">
                                <span>DATA INTEGRITY:</span>
                                <span>99.7%</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div
                            style={{
                                color: highlightColor,
                                fontSize: "0.8rem",
                                borderBottom: `1px solid ${secondaryColor}`,
                                paddingBottom: "0.5rem",
                                marginBottom: "0.5rem",
                                letterSpacing: "1px",
                            }}
                        >
                            RECENT ACCESS
                        </div>
                        <div className="flex flex-col gap-1" style={{ fontSize: "0.75rem", color: textColor }}>
                            <div className="py-1 px-2 hover:bg-opacity-20 cursor-pointer" style={{ backgroundColor: "rgba(15, 124, 173, 0.1)" }}>
                                SPICE HARVESTER SCHEMATICS
                            </div>
                            <div className="py-1 px-2 hover:bg-opacity-20 cursor-pointer">STILGAR, FREMEN NAIB</div>
                            <div className="py-1 px-2 hover:bg-opacity-20 cursor-pointer">ARRAKIS CLIMATE PATTERNS</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const SidebarItem = ({ label, active, onClick }) => (
        <div
            className="cursor-pointer py-1 px-2 text-sm flex items-center"
            onClick={onClick}
            style={{
                color: active ? highlightColor : textColor,
                backgroundColor: active ? "rgba(224, 111, 31, 0.1)" : "transparent",
                borderLeft: active ? `2px solid ${highlightColor}` : "none",
                paddingLeft: active ? "6px" : "8px",
            }}
        >
            <span style={{ fontSize: "0.6rem", marginRight: "8px" }}>{">"}</span>
            {label}
        </div>
    );

    const renderMainContent = () => {
        switch (activeSection) {
            case "atreides":
                return renderAtreidesContent();
            case "main":
            default:
                return renderHomeContent();
        }
    };

    const renderHomeContent = () => {
        return (
            <div className="p-6">
                <div className="mb-8 pb-4" style={{ borderBottom: `1px dashed ${secondaryColor}` }}>
                    <div className="flex justify-between items-center">
                        <h1
                            style={{
                                color: textColor,
                                fontSize: "1.8rem",
                                letterSpacing: "1px",
                                marginBottom: "1rem",
                            }}
                        >
                            DUNE TECHNICAL DATABASE
                        </h1>
                        <div style={{ color: accentColor, fontSize: "0.8rem" }}>REF: MASTER-INDEX-001</div>
                    </div>
                    <div style={{ color: textColor, lineHeight: 1.6 }}>
                        Welcome to the technical schematic interface of the Dune Encyclopedia. This database contains detailed records of the
                        Imperium, including Great Houses, planets, technology, and key historical figures from the known universe.
                    </div>
                    <div
                        className="mt-4 p-2"
                        style={{
                            backgroundColor: "rgba(224, 111, 31, 0.1)",
                            border: `1px solid ${highlightColor}`,
                            fontSize: "0.8rem",
                            color: highlightColor,
                        }}
                    >
                        NOTICE: This database contains information classified by the Spacing Guild. Access to certain sections may require additional
                        clearance. All queries are logged.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div
                        className="p-4"
                        style={{
                            backgroundColor: "rgba(15, 124, 173, 0.1)",
                            border: `1px solid ${accentColor}`,
                        }}
                    >
                        <div
                            style={{
                                color: highlightColor,
                                fontSize: "1.2rem",
                                borderBottom: `1px solid ${secondaryColor}`,
                                paddingBottom: "0.5rem",
                                marginBottom: "1rem",
                            }}
                        >
                            FEATURED ENTRY
                        </div>
                        <h3 style={{ color: accentColor, fontSize: "1.1rem", marginBottom: "0.5rem" }}>HOLTZMAN SHIELD GENERATOR</h3>
                        <div style={{ color: textColor, fontSize: "0.9rem", marginBottom: "1rem" }}>
                            The Holtzman Shield is a defensive technology that creates a protective field that allows objects to penetrate it only at
                            slow speeds.
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <div style={{ color: accentColor, marginBottom: "0.25rem" }}>INVENTOR:</div>
                                <div style={{ color: textColor }}>Holtzman, Georgi P.</div>
                            </div>
                            <div>
                                <div style={{ color: accentColor, marginBottom: "0.25rem" }}>ERA:</div>
                                <div style={{ color: textColor }}>Pre-Butlerian Jihad</div>
                            </div>
                            <div>
                                <div style={{ color: accentColor, marginBottom: "0.25rem" }}>STATUS:</div>
                                <div style={{ color: textColor }}>Active Technology</div>
                            </div>
                            <div>
                                <div style={{ color: accentColor, marginBottom: "0.25rem" }}>RESTRICTIONS:</div>
                                <div style={{ color: textColor }}>Spacing Guild Regulated</div>
                            </div>
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                style={{
                                    backgroundColor: "rgba(224, 111, 31, 0.2)",
                                    border: `1px solid ${highlightColor}`,
                                    color: highlightColor,
                                    padding: "0.25rem 0.75rem",
                                    fontSize: "0.8rem",
                                }}
                            >
                                ACCESS COMPLETE FILE
                            </button>
                        </div>
                    </div>

                    <div
                        className="p-4"
                        style={{
                            backgroundColor: "rgba(15, 124, 173, 0.1)",
                            border: `1px solid ${accentColor}`,
                        }}
                    >
                        <div
                            style={{
                                color: highlightColor,
                                fontSize: "1.2rem",
                                borderBottom: `1px solid ${secondaryColor}`,
                                paddingBottom: "0.5rem",
                                marginBottom: "1rem",
                            }}
                        >
                            RECENT UPDATES
                        </div>
                        <div className="space-y-3 text-sm">
                            <div>
                                <div style={{ color: accentColor }}>10934.16.3</div>
                                <div style={{ color: textColor }}>
                                    Added detailed maps of the Western Deep Desert of Arrakis based on recent Guild survey.
                                </div>
                            </div>
                            <div>
                                <div style={{ color: accentColor }}>10934.15.7</div>
                                <div style={{ color: textColor }}>Updated House Atreides lineage with recently discovered ancestral connections.</div>
                            </div>
                            <div>
                                <div style={{ color: accentColor }}>10934.14.2</div>
                                <div style={{ color: textColor }}>
                                    Technical specifications for the latest model of ornithopter added to vehicle database.
                                </div>
                            </div>
                            <div>
                                <div style={{ color: accentColor }}>10934.12.5</div>
                                <div style={{ color: textColor }}>
                                    Expanded Bene Gesserit historical records with recovered documents from the Chapter House archives.
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                style={{
                                    backgroundColor: "rgba(224, 111, 31, 0.2)",
                                    border: `1px solid ${highlightColor}`,
                                    color: highlightColor,
                                    padding: "0.25rem 0.75rem",
                                    fontSize: "0.8rem",
                                }}
                            >
                                VIEW ALL UPDATES
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div
                        style={{
                            color: highlightColor,
                            fontSize: "1.2rem",
                            borderBottom: `1px solid ${secondaryColor}`,
                            paddingBottom: "0.5rem",
                            marginBottom: "1rem",
                        }}
                    >
                        CATEGORY INDEX
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "GREAT HOUSES", count: 32 },
                            { name: "PLANETS", count: 217 },
                            { name: "TECHNOLOGY", count: 843 },
                            { name: "CHARACTERS", count: 1246 },
                            { name: "FAUNA & FLORA", count: 528 },
                            { name: "ORGANIZATIONS", count: 164 },
                            { name: "BATTLES", count: 93 },
                            { name: "VEHICLES", count: 129 },
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="p-3 cursor-pointer"
                                style={{
                                    border: `1px solid ${accentColor}`,
                                    backgroundColor: "rgba(15, 124, 173, 0.05)",
                                }}
                            >
                                <div style={{ color: textColor, marginBottom: "0.25rem" }}>{category.name}</div>
                                <div style={{ color: accentColor, fontSize: "0.8rem" }}>ENTRIES: {category.count}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const renderAtreidesContent = () => {
        return (
            <div className="p-6">
                <div className="mb-4 pb-2 flex justify-between items-center" style={{ borderBottom: `1px solid ${secondaryColor}` }}>
                    <div className="flex items-center">
                        <h1
                            style={{
                                color: textColor,
                                fontSize: "1.5rem",
                                letterSpacing: "1px",
                            }}
                        >
                            HOUSE ATREIDES
                        </h1>
                        <div style={{ color: accentColor, fontSize: "0.8rem", marginLeft: "1rem" }}>REF: GH-LAND-001.45A</div>
                    </div>
                    <div>
                        <button
                            style={{
                                backgroundColor: "rgba(224, 111, 31, 0.1)",
                                border: `1px solid ${highlightColor}`,
                                color: highlightColor,
                                padding: "0.25rem 0.5rem",
                                fontSize: "0.7rem",
                                marginRight: "0.5rem",
                            }}
                        >
                            EXPORT DATA
                        </button>
                        <button
                            style={{
                                backgroundColor: "rgba(15, 124, 173, 0.1)",
                                border: `1px solid ${accentColor}`,
                                color: accentColor,
                                padding: "0.25rem 0.5rem",
                                fontSize: "0.7rem",
                            }}
                        >
                            RELATED FILES
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3">
                        <div
                            style={{
                                border: `1px solid ${accentColor}`,
                                padding: "1.5rem",
                                backgroundColor: "rgba(15, 124, 173, 0.05)",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <div style={{ color: textColor, lineHeight: 1.6, marginBottom: "1rem" }}>
                                House Atreides is one of the Great Houses of the Landsraad, a noble family with ancestral holdings on the planet
                                Caladan. Known for their fair rule and honorable conduct, House Atreides has maintained significant influence in the
                                Imperial court despite modest holdings compared to other Great Houses.
                            </div>

                            <div style={{ color: textColor, lineHeight: 1.6, marginBottom: "1rem" }}>
                                The Atreides lineage claims descent from Agamemnon of the ancient Greek House Atreus on Old Earth. Their family motto
                                is "The measure of the man is what he does with power," reflecting their philosophical approach to governance and
                                politics.
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div>
                                    <div
                                        style={{
                                            color: highlightColor,
                                            borderBottom: `1px dashed ${secondaryColor}`,
                                            paddingBottom: "0.25rem",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        LINEAGE DATA
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>ANCESTRAL HOME:</div>
                                            <div style={{ color: textColor }}>Caladan</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>HOUSE COLORS:</div>
                                            <div style={{ color: textColor }}>Green and Black</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>SYMBOL:</div>
                                            <div style={{ color: textColor }}>Red Hawk (Aquila)</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>FOUNDING:</div>
                                            <div style={{ color: textColor }}>8677 B.G.</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>POLITICAL STATUS:</div>
                                            <div style={{ color: textColor }}>Major House - Landsraad Council</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        style={{
                                            color: highlightColor,
                                            borderBottom: `1px dashed ${secondaryColor}`,
                                            paddingBottom: "0.25rem",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        CURRENT LEADERSHIP
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>HEAD OF HOUSE:</div>
                                            <div style={{ color: textColor }}>Duke Leto I Atreides</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>HEIR:</div>
                                            <div style={{ color: textColor }}>Paul Atreides</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>CONSORT:</div>
                                            <div style={{ color: textColor }}>Lady Jessica (Bene Gesserit)</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>MASTER OF ASSASSINS:</div>
                                            <div style={{ color: textColor }}>Thufir Hawat (Mentat)</div>
                                        </div>
                                        <div className="flex">
                                            <div style={{ color: accentColor, width: "40%" }}>SWORDMASTER:</div>
                                            <div style={{ color: textColor }}>Duncan Idaho/Gurney Halleck</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                border: `1px solid ${accentColor}`,
                                padding: "1.5rem",
                                backgroundColor: "rgba(15, 124, 173, 0.05)",
                            }}
                        >
                            <div
                                style={{
                                    color: highlightColor,
                                    fontSize: "1.1rem",
                                    borderBottom: `1px solid ${secondaryColor}`,
                                    paddingBottom: "0.5rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                RECENT HISTORICAL DEVELOPMENTS
                            </div>

                            <div style={{ color: textColor, marginBottom: "1rem" }}>
                                <div style={{ color: accentColor, marginBottom: "0.5rem" }}>10,191 A.G.</div>
                                <div style={{ lineHeight: 1.6 }}>
                                    House Atreides is granted fiefdom over the planet Arrakis by Imperial decree. This transfer of control from House
                                    Harkonnen represents one of the most significant political changes in recent Imperial history. Arrakis, the only
                                    source of the spice melange in the known universe, is a position of tremendous strategic importance and danger.
                                </div>
                            </div>

                            <div style={{ color: textColor, marginBottom: "1rem" }}>
                                <div style={{ color: accentColor, marginBottom: "0.5rem" }}>10,190 A.G.</div>
                                <div style={{ lineHeight: 1.6 }}>
                                    Duke Leto forms a military alliance with House Ecaz, strengthening the Atreides position against their traditional
                                    enemies, House Harkonnen. This alliance includes exchange of military technology and training methodologies.
                                </div>
                            </div>

                            <div style={{ color: textColor }}>
                                <div style={{ color: accentColor, marginBottom: "0.5rem" }}>10,187 A.G.</div>
                                <div style={{ lineHeight: 1.6 }}>
                                    Paul Atreides begins advanced training in Mentat disciplines under Thufir Hawat and prana-bindu techniques from
                                    Lady Jessica, making him the first potential Mentat-Bene Gesserit hybrid in recorded history.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                border: `1px solid ${accentColor}`,
                                padding: "1rem",
                                backgroundColor: "rgba(15, 124, 173, 0.05)",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    color: highlightColor,
                                    fontSize: "0.9rem",
                                    borderBottom: `1px solid ${secondaryColor}`,
                                    paddingBottom: "0.5rem",
                                    marginBottom: "1rem",
                                    textAlign: "center",
                                }}
                            >
                                HOUSE CREST
                            </div>
                            <div
                                className="flex justify-center items-center p-4"
                                style={{
                                    border: `1px dashed ${accentColor}`,
                                    height: "180px",
                                    backgroundColor: "rgba(5, 36, 64, 0.7)",
                                }}
                            >
                                <div
                                    style={{
                                        color: highlightColor,
                                        fontStyle: "italic",
                                        textAlign: "center",
                                        fontSize: "0.8rem",
                                    }}
                                >
                                    [Atreides Red Hawk Emblem]
                                </div>
                            </div>
                            <div
                                style={{
                                    color: accentColor,
                                    fontSize: "0.7rem",
                                    textAlign: "center",
                                    marginTop: "0.5rem",
                                }}
                            >
                                Emblem registered with the Imperial Herald, 8756 A.G.
                            </div>
                        </div>

                        <div
                            style={{
                                border: `1px solid ${accentColor}`,
                                padding: "1rem",
                                backgroundColor: "rgba(15, 124, 173, 0.05)",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    color: highlightColor,
                                    fontSize: "0.9rem",
                                    borderBottom: `1px solid ${secondaryColor}`,
                                    paddingBottom: "0.5rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                RELATED ENTITIES
                            </div>
                            <div className="space-y-2 text-sm">
                                <div
                                    className="py-1 px-2 cursor-pointer hover:bg-opacity-20"
                                    style={{
                                        backgroundColor: "rgba(15, 124, 173, 0.1)",
                                        color: textColor,
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span>DUKE LETO ATREIDES</span>
                                    <span style={{ color: accentColor }}>BIO-FILE</span>
                                </div>
                                <div
                                    className="py-1 px-2 cursor-pointer hover:bg-opacity-20"
                                    style={{
                                        color: textColor,
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span>PAUL ATREIDES</span>
                                    <span style={{ color: accentColor }}>BIO-FILE</span>
                                </div>
                                <div
                                    className="py-1 px-2 cursor-pointer hover:bg-opacity-20"
                                    style={{
                                        color: textColor,
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span>CALADAN</span>
                                    <span style={{ color: accentColor }}>PLANET</span>
                                </div>
                                <div
                                    className="py-1 px-2 cursor-pointer hover:bg-opacity-20"
                                    style={{
                                        color: textColor,
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span>ARRAKIS TRANSFER</span>
                                    <span style={{ color: accentColor }}>EVENT</span>
                                </div>
                                <div
                                    className="py-1 px-2 cursor-pointer hover:bg-opacity-20"
                                    style={{
                                        color: textColor,
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span>HOUSE HARKONNEN</span>
                                    <span style={{ color: accentColor }}>HOUSE</span>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                border: `1px solid ${highlightColor}`,
                                padding: "1rem",
                                backgroundColor: "rgba(224, 111, 31, 0.1)",
                            }}
                        >
                            <div
                                style={{
                                    color: highlightColor,
                                    fontSize: "0.9rem",
                                    marginBottom: "0.5rem",
                                    textAlign: "center",
                                }}
                            >
                                SECURITY CLEARANCE
                            </div>
                            <div
                                style={{
                                    color: textColor,
                                    fontSize: "0.8rem",
                                    lineHeight: 1.5,
                                    textAlign: "center",
                                }}
                            >
                                Additional sensitive information about House Atreides military capabilities and political intelligence requires
                                Alpha-level clearance.
                            </div>
                            <div className="flex justify-center mt-3">
                                <button
                                    style={{
                                        backgroundColor: "rgba(224, 111, 31, 0.2)",
                                        border: `1px solid ${highlightColor}`,
                                        color: highlightColor,
                                        padding: "0.25rem 0.75rem",
                                        fontSize: "0.8rem",
                                    }}
                                >
                                    REQUEST ACCESS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div
            style={{
                backgroundColor: primaryColor,
                color: textColor,
                fontFamily,
                minHeight: "100vh",
            }}
        >
            {renderHeader()}
            <div className="flex">
                {renderSidebar()}
                <div
                    className="flex-grow transition-all duration-300"
                    style={{
                        marginLeft: menuOpen ? "260px" : "0",
                    }}
                >
                    <main>{renderMainContent()}</main>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {menuOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-0" onClick={toggleMenu} />}
        </div>
    );
};

export default TechnicalSchematicWiki;
