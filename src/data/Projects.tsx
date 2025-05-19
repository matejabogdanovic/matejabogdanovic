import { ProjectInfoType } from "../sections/projects/ProjectCard";

export const _projects: ProjectInfoType[][] = [
  [
    // start english
    {
      title: "Medical Appointment Management System",
      link: "https://github.com/matejabogdanovic/Spring-Boot-React-Health-Management-System",
      language: "react",
      difficulty: 3,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          A React-based web app for managing medical appointments with
          role-based dashboards and a responsive design.
          <li>
            <b>Features:</b> Optimized search, JWT authentication{" "}
          </li>
          <li>
            <b>Dashboards:</b> Admins, Doctors and Clients have separate
            dashboards with custom features
          </li>
          <li>
            <b>Backend:</b> Spring Boot (Microservices) - Not developed by me
          </li>
        </ul>
      ),
    },
    {
      title: "FAT File System Implemented on a .txt File",
      link: "https://github.com/matejabogdanovic/FAT-File-System-Simulation",
      language: "cpp",
      difficulty: 3.5,
      year: 2025,
      description: (
        <>
          A simple FAT file system implemented using a plain text file,
          encapsulated in a class that simulates a disk.
          <br />
          Hard disk class supports basic read and write operations to specific
          disk blocks, mimicking real disk interface
        </>
      ),
    },
    {
      title: "Simple Risc-V Kernel",
      link: "https://github.com/matejabogdanovic/University/tree/main/Year2/Semester4/OS1/riscv-simple-kernel",
      language: "cpp",
      difficulty: 4,
      year: 2024,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          A simple RISC-V kernel that supports:
          <li>
            <b>Multitasking:</b> Process management
          </li>
          <li>
            <b>Time-sharing:</b> Synchronous and asynchronous context switching
          </li>
          <li>
            <b>Preemption:</b> Control handover between processes
          </li>
          <li>
            <b>The project includes:</b> Memory management, threads, semaphores,
            and an I/O system
          </li>
        </ul>
      ),
    },
    {
      title: "Java Game Server (Tick-Based Multiplayer)",
      link: "https://github.com/matejabogdanovic/Simple-Game-Server",
      language: "java",
      difficulty: 1.5,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Lightweight multiplayer gaming server built in plain Java using
          sockets and a tick-based synchronization system.
          <li>
            <b>Architecture:</b> Separated packages for server, client, shared
            models (e.g., <i>Player</i>), and core game logic
          </li>
          <li>
            <b>Synchronization:</b> Tick-based system ensuring consistent
            real-time movement and interactions
          </li>
          <li>
            <b>Client Communication:</b> Each client runs dedicated read/write
            threads for real-time updates
          </li>
          <li>
            <b>GUI:</b> Implemented using AWT for basic visual representation
          </li>
        </ul>
      ),
    },
    {
      title: "Custom Database with Java Sockets",
      link: "https://github.com/matejabogdanovic/MBDatabase-Messaging-Database",
      language: "java",
      difficulty: 2,
      year: 2025,
      description: (
        <>
          This project implements a (horrible) custom database using Java
          sockets for communication between a multi-threaded server and multiple
          clients. <br /> The server listens for incoming requests and processes
          and stores messages in separate files for each chat. <br />
          Clients connect to the server to send and retrieve messages.
          <br /> Note that this project is designed to be used with Spring Boot
          or other similar frameworks.
        </>
      ),
    },
  ], // end english
  [
    // start serbian
    {
      title: "Sistem za upravljanje medicinskim terminima",
      link: "https://github.com/matejabogdanovic/Spring-Boot-React-Health-Management-System",
      language: "react",
      difficulty: 3,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Veb aplikacija zasnovana na React-u za upravljanje medicinskim
          terminima sa kontrolnim tablama po ulogama i responzivnim dizajnom.
          <li>
            <b>Funkcionalnosti:</b> Optimizovana pretraga, JWT autentifikacija
          </li>
          <li>
            <b>Kontrolne table:</b> Administratori, doktori i klijenti imaju
            odvojene table sa prilagođenim funkcijama
          </li>
          <li>
            <b>Backend:</b> Spring Boot (mikroservisi) – Nisam napravio ja
          </li>
        </ul>
      ),
    },
    {
      title: "FAT fajl sistem implementiran unutar .txt fajla",
      link: "https://github.com/matejabogdanovic/FAT-File-System-Simulation",
      language: "cpp",
      difficulty: 3.5,
      year: 2025,
      description: (
        <>
          Jednostavan FAT fajl sistem implementiran korišćenjem običnog
          tekstualnog fajla, enkapsuliran u klasu koja simulira disk.
          <br />
          Klasa za hard disk podržava osnovne operacije čitanja i pisanja nad
          određenim blokovima, oponašajući interfejs pravog diska.
        </>
      ),
    },
    {
      title: "Jednostavan RISC-V kernel",
      link: "https://github.com/matejabogdanovic/University/tree/main/Year2/Semester4/OS1/riscv-simple-kernel",
      language: "cpp",
      difficulty: 4,
      year: 2024,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Jednostavan RISC-V kernel koji podržava:
          <li>
            <b>Multitasking:</b> Upravljanje procesima
          </li>
          <li>
            <b>Deljenje vremena:</b> Sinhrona i asinhrona promena konteksta
          </li>
          <li>
            <b>Preuzimanje kontrole:</b> Preemption
          </li>
          <li>
            <b>Projekat uključuje:</b> Upravljanje memorijom, niti, semafore i
            I/O sistem
          </li>
        </ul>
      ),
    },
    {
      title: "Java gejmerski server (višekorisnički, po ciklusima)",
      link: "https://github.com/matejabogdanovic/Simple-Game-Server",
      language: "java",
      difficulty: 1.5,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Lagan višekorisnički gejmerski server u čistoj Javi koristeći sokete i
          tick-based sistem za sinhronizaciju.
          <li>
            <b>Arhitektura:</b> Odvojeni paketi za server, klijenta, zajedničke
            modele (npr. <i>Igrač</i>) i osnovnu logiku igre
          </li>
          <li>
            <b>Sinhronizacija:</b> Tick-based sistem koji omogućava konzistentno
            kretanje i interakcije u realnom vremenu
          </li>
          <li>
            <b>Klijentska komunikacija:</b> Svaki klijent koristi posebne niti
            za čitanje i pisanje podataka
          </li>
          <li>
            <b>GUI:</b> Implementiran pomoću AWT-a za jednostavnu vizuelnu
            reprezentaciju
          </li>
        </ul>
      ),
    },
    {
      title: "Custom baza podataka sa Java soketima",
      link: "https://github.com/matejabogdanovic/MBDatabase-Messaging-Database",
      language: "java",
      difficulty: 2,
      year: 2025,
      description: (
        <>
          Ovaj projekat implementira (užasnu) custom bazu podataka koristeći
          Java sokete za komunikaciju između višenitnog servera i više
          klijenata. <br />
          Server osluškuje dolazne zahteve, obrađuje ih i čuva poruke u posebnim
          fajlovima za svaki čet. <br />
          Klijenti se povezuju na server kako bi slali i preuzimali poruke.
          <br /> Napomena: ovaj projekat je zamišljen da se koristi uz Spring
          Boot ili slični framework.
        </>
      ),
    },
  ],
];

const Projects = () => {
  return <>Projects</>;
};

export default Projects;
