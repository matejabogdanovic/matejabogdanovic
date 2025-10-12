import { ProjectInfoType } from "../sections/projects/ProjectCard";

export const _projects: ProjectInfoType[][] = [
  [
    // start english
    {
      title: "Assembler, Linker & Emulator",
      link: "https://github.com/matejabogdanovic/SS-Assembler-Linker-Emulator",
      language: "cpp",
      difficulty: 4,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          A single project implementing a <b>complete toolchain</b>:
          <li>
            <b>Assembler:</b> Single-pass assembler converting assembly code
            into textual or binary object files
          </li>
          <li>
            <b>Linker:</b> Target-independent linker combining assembler
            outputs, resolving symbols, and generating relocatable or memory
            init files
          </li>
          <li>
            <b>Emulator:</b> Interpretive emulator executing programs from
            memory initialization files, emulating CPU registers and terminal
            I/O
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
      title: "Cottage Booking App",
      link: "https://github.com/matejabogdanovic/PIA-MEAN-Mountain-Cottage",
      language: "angular",
      difficulty: 3.5,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Full-stack web application for{" "}
          <b>cottage reservation and management</b>, developed using the{" "}
          <b>MEAN stack</b> and <b>Tailwind CSS</b> for responsive, modern
          design.
          <li>
            <b>Frontend (Angular + Tailwind):</b> Interactive interface with
            multiple roles (Tourist, Owner, Admin)
          </li>
          <li>
            <b>Backend (Node.js + Express):</b> REST API for authentication,
            reservations, and data management
          </li>
          <li>
            <b>Database (MongoDB):</b> Efficiently stores users, cottages, and
            reservation data
          </li>
          <li>
            <b>Features:</b> Dynamic dashboards, statistics visualization, and
            calendar-based reservation system
          </li>
        </ul>
      ),
    },

    {
      title: "Mini Hypervisor Project",
      link: "https://github.com/matejabogdanovic/AOR2-KVM-Virtual-Machine",
      language: "cpp",
      difficulty: 3.5,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          A low-level systems project implementing a simplified{" "}
          <b>hypervisor</b> using the
          <b> KVM (Kernel-based Virtual Machine)</b> API in C.
          <li>
            <b>Purpose:</b> Run guest VMs in 64-bit long mode with configurable
            memory and page size
          </li>
          <li>
            <b>Version A:</b> Single VM execution with serial I/O and{" "}
            <code>hlt</code> termination
          </li>
          <li>
            <b>Version B:</b> Concurrent multi-VM support using POSIX threads
          </li>
          <li>
            <b>Version C:</b> Guest file I/O via I/O ports (open, read, write,
            close)
          </li>
          <li>
            <b>Focus:</b> Memory management, virtualization, and kernel-level
            I/O emulation
          </li>
        </ul>
      ),
    },

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
      title: "Asembler, Linker i Emulator",
      link: "https://github.com/matejabogdanovic/SS-Assembler-Linker-Emulator",
      language: "cpp",
      difficulty: 4,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Projekat koji implementira <b>kompletan lanac alata</b>:
          <li>
            <b>Asembler:</b> Jednoprolazni asembler koji prevodi asembli kod u
            tekstualne ili binarne objektne fajlove
          </li>
          <li>
            <b>Linker:</b> Linker nezavisan od arhitekture. Kombinuje izlaze
            asemblera, razrešava simbole i generiše relokabilne ili memorijske
            inicijalizacione fajlove
          </li>
          <li>
            <b>Emulator:</b> Interpretativni emulator koji izvršava programe iz
            memorijskih fajlova, emulira CPU registre i pruža I/O operacije
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
      title: "Aplikacija za rezervaciju vikendica",
      link: "https://github.com/matejabogdanovic/PIA-MEAN-Mountain-Cottage",
      language: "angular",
      difficulty: 3.5,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Full-stack web aplikacija za{" "}
          <b>rezervaciju i upravljanje vikendicama</b>, razvijena korišćenjem{" "}
          <b>MEAN stack-a</b> i <b>Tailwind CSS-a</b> za moderan i responzivan
          dizajn.
          <li>
            <b>Frontend (Angular + Tailwind):</b> Interaktivni korisnički
            interfejs sa više uloga (turista, vlasnik, administrator)
          </li>
          <li>
            <b>Backend (Node.js + Express):</b> REST API koji obrađuje
            autentifikaciju, rezervacije i upravljanje podacima
          </li>
          <li>
            <b>Baza podataka (MongoDB):</b> Efikasno čuva korisnike, vikendice i
            podatke o rezervacijama
          </li>
          <li>
            <b>Funkcionalnosti:</b> Dinamički paneli, vizualizacija statistike i
            sistem rezervacija zasnovan na kalendaru
          </li>
        </ul>
      ),
    },

    {
      title: "Mini Hipervizor Projekat",
      link: "https://github.com/matejabogdanovic/AOR2-KVM-Virtual-Machine",
      language: "cpp",
      difficulty: 3.5,
      year: 2025,
      description: (
        <ul className="list-disc [&_li]:ml-4">
          Projekat koji implementira jednostavan <b>hipervizor</b> korišćenjem
          <b> KVM (Kernel-based Virtual Machine)</b> API-ja u C jeziku.
          <li>
            <b>Svrha:</b> Pokretanje virtuelnih mašina (VM) u 64-bitnom režimu
            sa podešavanjem memorije i veličine stranica
          </li>
          <li>
            <b>Verzija A:</b> Izvršavanje jedne VM instance sa serijskim I/O i
            obradom <code>hlt</code> instrukcije
          </li>
          <li>
            <b>Verzija B:</b> Istovremena podrška za više VM instanci
            korišćenjem POSIX niti
          </li>
          <li>
            <b>Verzija C:</b> I/O operacije gostujućih sistema preko I/O portova
            (open, read, write, close)
          </li>
          <li>
            <b>Fokus:</b> Upravljanje memorijom, virtualizacija i emulacija I/O
            na nivou kernela
          </li>
        </ul>
      ),
    },
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
