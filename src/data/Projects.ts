import { ProjectInfoType } from "../sections/projects/ProjectCard";

export const projects: ProjectInfoType[] = [
  {
    title: "Medical Appointment Management System",
    link: "https://github.com/matejabogdanovic/Spring-Boot-React-Health-Management-System",
    language: "react",
    difficulty: 3,
    year: 2025,
    description:
      "A React-based web app for managing medical appointments with role-based dashboards and a responsive design. Features: Optimized search, JWT authentication Dashboards: Admins, Doctors and Clients have separate dashboards with custom features Backend: Spring Boot (Microservices) - Not developed by me",
  },
  {
    title: "FAT File System Implemented on a .txt File",
    link: "https://github.com/matejabogdanovic/FAT-File-System-Simulation",
    language: "cpp",
    difficulty: 3.5,
    year: 2025,
    description:
      "A simple FAT file system implemented using a plain text file, encapsulated in a class that simulates a disk. Hard disk class supports basic read and write operations to specific disk blocks, mimicking real disk interface.",
  },
  {
    title: "Simple Risc-V Kernel",
    link: "https://github.com/matejabogdanovic/University/tree/main/Year2/Semester4/OS1/riscv-simple-kernel",
    language: "cpp",
    difficulty: 4,
    year: 2024,
    description:
      "A simple RISC-V kernel that supports: Multitasking (process management) Time-sharing Synchronous and asynchronous context switchi Preemption The project includes memory management, threads, semaphores, and an I/O system.",
  },
  {
    title: "Java Game Server (Tick-Based Multiplayer)",
    link: "https://github.com/matejabogdanovic/Simple-Game-Server",
    language: "java",
    difficulty: 1.5,
    year: 2025,
    description:
      "A lightweight multiplayer game server in plain Java using sockets and a tick-based system for synchronized gameplay. The architecture includes separate packages for server, client, shared models (Player), and basic game example logic. Each client runs a reader and writer thread for real-time input and updates, while the server manages players and synchronizes movement per tick. GUI is implemented using AWT.",
  },
];
