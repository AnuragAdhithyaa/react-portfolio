import React from 'react';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Courses from './components/Courses';
import MicrochipBackground from './components/MicrochipBackground';
import ContactHub from './components/ContactHub';

// ==========================================
// CONFIGURATION SYSTEM
// Edit these values to update your portfolio
// ==========================================
export const PROFILE_DATA = {
    name: "Adhithyaa A",
    role: "Embedded Engineer",
    bioLines: [
        "I am an aspiring Embedded Engineer who believes that great hardware is only as good as the communication behind it.",
        "Specialized in ARM Cortex-M architectures and RTOS development, I bridge the gap between complex low-level programming and high-level IoT cloud integration.",
        "Beyond the circuit board, I thrive in multidisciplinary teams, translating technical constraints into clear project goals and fostering a culture of collaborative problem-solving."
    ],
    cvFilename: "Adhithyaa_A_CV.pdf",
    videoSource: "https://assets.mixkit.co/videos/preview/mixkit-japanese-lanterns-at-night-14739-large.mp4", // Placeholder Kyoto night video
    circuitVideoSource: "https://www.youtube.com/embed/Im7slkFMtI8?autoplay=1&mute=1&loop=1&playlist=Im7slkFMtI8&controls=0&showinfo=0&autohide=1&modestbranding=1", // YouTube Circuit video
    photoPlaceholder: "/Adhithyaa_A.jpeg",
    linkedinLink: "https://www.linkedin.com/in/adhithyaa-anurag-859470291/",
    githubProfile: "https://github.com/AnuragAdhithyaa",
    codingTextLines: [
        "Hello, this is Adhithyaa A.",
        "Aspiring Embedded Engineer.",
        "> System.init(); [OK]",
        "> Loading ARM_Cortex_M4_Drivers... [OK]",
        "> Bridging Hardware and IoT Cloud."
    ],
    skills: [
        {
            category: "Hardware & Microcontrollers",
            items: ["ARM Cortex-M (STM32)", "ESP32 / ESP8266", "AVR / Arduino", "PCB Design (Altium, KiCad)"]
        },
        {
            category: "Programming & Firmware",
            items: ["C / C++", "Python", "FreeRTOS", "Embedded Linux", "Assembly"]
        },
        {
            category: "Protocols & IoT Cloud",
            items: ["I2C, SPI, UART, CAN", "MQTT, CoAP", "LoRaWAN", "AWS IoT Core"]
        }
    ],
    internships: [
        {
            id: 1,
            title: "Student Intern",
            company: "AAI – Airport Authority of India",
            duration: "June 2025 – July 2025",
            description: "Assisted in understanding and monitoring communication systems (HF, VHF, CPDLC). Gained exposure to navigation systems such as Localizer, Glide Path and DME integration. Learned about air traffic management operations.",
            logo: "/aai_logo.png"
        },
        {
            id: 2,
            title: "Student Intern",
            company: "Automate X – PLC based training to Industrial Automation",
            duration: "June 2025 – July 2025",
            description: "Enhanced knowledge in PLC and Ladder Logic through designing and troubleshooting industrial control systems using the LogixPro and Twidosuite simulation software. Created and simulated the complete control logic for a PLC-based conveyor belt simulator in Twidosuite, accurately modelling the machine’s full operational sequence. Applied automation principles on batch simulation and automatic opening and closing of valves with accurate timing of the counters.",
            logo: "https://cdn-icons-png.flaticon.com/512/2833/2833694.png" // generic automation/PLC icon
        }
    ],
    certificates: [
        { id: 1, title: "Airport Internship", file: "/Airport Internship Certificate.pdf", type: "pdf" },
        { id: 2, title: "Anveshan", file: "/anveshan.pdf", type: "pdf" },
        { id: 3, title: "Baremetal Programming", file: "/Baremetal programming.pdf", type: "pdf" },
        { id: 4, title: "General Certificate", file: "/Certificate.pdf", type: "pdf" },
        { id: 5, title: "Deloitte", file: "/Deloite certificate.pdf", type: "pdf" },
        { id: 6, title: "IoT LPU", file: "/iot certificate lpu.pdf", type: "pdf" },
        { id: 7, title: "IoT Udemy", file: "/iot udemy.pdf", type: "pdf" },
        { id: 8, title: "PLC Certificate", file: "/PLC certificate.png", type: "image" },
        { id: 9, title: "RTOS ARM", file: "/RTOS ARM.pdf", type: "pdf" }
    ],
    projects: [
        {
            id: 1,
            title: "Eviro Desk Desk",
            description: "Portable environmental monitoring device using Raspberry Pi 4 and Seeed XIAO to measure temperature, humidity, air quality, and soil moisture in real time. Features OLED display, LiPo power, compact design, and supports indoor and outdoor monitoring.",
            githubLink: "https://github.com/AnuragAdhithyaa/Enviro-Desk---desk-monitoring-gadjet-"
        },
        {
            id: 2,
            title: "Industrial-Document-Analyzer-AI-Powered",
            description: "Industrial companies often have to review lengthy reports, manuals, or guidelines. Manually reading and summarizing them is time-consuming. The goal of this project is to automate the process of extracting text and generating a concise summary",
            githubLink: "https://github.com/AnuragAdhithyaa/Industrial-Document-Analyzer-AI-Powered-"
        },
        {
            id: 3,
            title: "32 bit RISC Processor",
            description: "Designed and implemented a 32-bit RISC processor architecture entirely in Verilog HDL using Xilinx Vivado. Developed core modules including a pipelined datapath, program counter with branch/stall handling, and instruction decode logic with decoder and register file. Simulated and verified functionality in Vivado using testbenches. Documented architecture, control logic, and simulation results for future FPGA deployment.",
            githubLink: ""
        },
        {
            id: 4,
            title: "RTOS Task Scheduler",
            description: "A lightweight preemptive RTOS kernel built for learning purposes.",
            githubLink: "https://github.com/adhithyaa/rtos-scheduler"
        }
    ],
    courses: [
        "Baremetal Programming on STM32",
        "RTOS - Real Time Operating System on ARM",
        "WEB Development on HTML,CSS,JAVASCRIPT",
        "IOT from Ground UP",
        "PLC - Ladder Logic",
        "DataBase Management System NPTEL"
    ]
};

function App() {
    return (
        <>
            <MicrochipBackground />
            <div className="app-container">
                <Navbar />
                <main>
                    <Hero data={PROFILE_DATA} />
                    <About data={PROFILE_DATA} />
                    <Skills data={PROFILE_DATA} />
                    <Internships data={PROFILE_DATA} />
                    <Projects data={PROFILE_DATA} />
                    <Certificates data={PROFILE_DATA} />
                    <Courses data={PROFILE_DATA} />
                    <ContactHub data={PROFILE_DATA} />
                </main>
            </div>
        </>
    );
}

export default App;
