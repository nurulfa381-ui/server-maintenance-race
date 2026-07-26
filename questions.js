/* =========================================================
   SERVER HERO RACE™
   QUESTIONS.JS FULL VERSION
   C05 – Server Maintenance
   Bahasa Melayu Malaysia / English
========================================================= */

window.SERVER_HERO_QUESTIONS = [

    {
        id: 1,

        q: {
            ms: "Apakah tindakan pertama sebelum penyelenggaraan server dilakukan?",
            en: "What is the first action before server maintenance is performed?"
        },

        options: [
            {
                ms: "Memadam semua data dalam server",
                en: "Delete all data in the server"
            },
            {
                ms: "Merekod dan menyemak maklumat server",
                en: "Record and verify the server information"
            },
            {
                ms: "Menukar semua komponen server",
                en: "Replace all server components"
            },
            {
                ms: "Menutup semua sistem keselamatan",
                en: "Disable all security systems"
            }
        ],

        answer: 1,

        ok: {
            ms: "Tahniah! Jawapan anda betul. Maklumat server perlu direkod dan disemak terlebih dahulu supaya juruteknik mengetahui spesifikasi, konfigurasi serta keadaan sebenar server sebelum penyelenggaraan dilakukan.",
            en: "Congratulations! Your answer is correct. Server information must be recorded and checked first so the technician understands its specifications, configuration and current condition before maintenance."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Tindakan pertama ialah merekod dan menyemak maklumat server supaya proses penyelenggaraan dapat dilakukan dengan sistematik dan selamat.",
            en: "Your answer is incorrect. Please try again. The first action is to record and check the server information so maintenance can be performed systematically and safely."
        }
    },


    {
        id: 2,

        q: {
            ms: "Apakah tujuan utama penyelenggaraan pencegahan?",
            en: "What is the main purpose of preventive maintenance?"
        },

        options: [
            {
                ms: "Memadam semua akaun pengguna",
                en: "Delete all user accounts"
            },
            {
                ms: "Menunggu sehingga server rosak",
                en: "Wait until the server fails"
            },
            {
                ms: "Mengurangkan risiko kerosakan server",
                en: "Reduce the risk of server failure"
            },
            {
                ms: "Menghentikan semua perkhidmatan rangkaian",
                en: "Stop all network services"
            }
        ],

        answer: 2,

        ok: {
            ms: "Tahniah! Jawapan anda betul. Penyelenggaraan pencegahan dilakukan secara berkala untuk mengesan masalah lebih awal dan mengurangkan risiko kerosakan server.",
            en: "Congratulations! Your answer is correct. Preventive maintenance is performed regularly to detect problems early and reduce the risk of server failure."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Penyelenggaraan pencegahan bertujuan mengurangkan risiko kerosakan sebelum masalah serius berlaku.",
            en: "Your answer is incorrect. Please try again. Preventive maintenance aims to reduce the risk of failure before a serious problem occurs."
        }
    },


    {
        id: 3,

        q: {
            ms: "Mengapakah gelang ESD digunakan semasa menyelenggara server?",
            en: "Why is an ESD wrist strap used during server maintenance?"
        },

        options: [
            {
                ms: "Mengukur suhu bilik server",
                en: "Measure the server room temperature"
            },
            {
                ms: "Meningkatkan kelajuan Internet",
                en: "Increase Internet speed"
            },
            {
                ms: "Menghidupkan server secara automatik",
                en: "Turn on the server automatically"
            },
            {
                ms: "Melindungi komponen daripada cas elektrostatik",
                en: "Protect components from electrostatic discharge"
            }
        ],

        answer: 3,

        ok: {
            ms: "Tahniah! Jawapan anda betul. Gelang ESD mengalirkan cas elektrostatik daripada badan pengguna supaya komponen elektronik server tidak rosak.",
            en: "Congratulations! Your answer is correct. An ESD wrist strap safely discharges static electricity from the user to protect server components."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Gelang ESD digunakan untuk melindungi komponen elektronik daripada kerosakan akibat cas elektrostatik.",
            en: "Your answer is incorrect. Please try again. An ESD wrist strap protects electronic components from damage caused by electrostatic discharge."
        }
    },


    {
        id: 4,

        q: {
            ms: "Apakah fungsi utama multimeter dalam penyelenggaraan server?",
            en: "What is the main function of a multimeter in server maintenance?"
        },

        options: [
            {
                ms: "Menguji voltan dan kesinambungan litar",
                en: "Test voltage and circuit continuity"
            },
            {
                ms: "Membersihkan habuk pada motherboard",
                en: "Remove dust from the motherboard"
            },
            {
                ms: "Mencipta domain baharu",
                en: "Create a new domain"
            },
            {
                ms: "Memberikan alamat IP kepada client",
                en: "Assign IP addresses to clients"
            }
        ],

        answer: 0,

        ok: {
            ms: "Tahniah! Jawapan anda betul. Multimeter digunakan untuk menguji voltan, rintangan dan kesinambungan litar elektrik.",
            en: "Congratulations! Your answer is correct. A multimeter is used to test voltage, resistance and electrical continuity."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Multimeter digunakan untuk menguji voltan dan kesinambungan litar, bukan untuk konfigurasi rangkaian.",
            en: "Your answer is incorrect. Please try again. A multimeter tests voltage and continuity, not network configuration."
        }
    },


    {
        id: 5,

        q: {
            ms: "Apakah akaun utama yang perlu ditetapkan selepas Windows Server 2019 dipasang?",
            en: "Which main account must be configured after Windows Server 2019 is installed?"
        },

        options: [
            {
                ms: "Guest",
                en: "Guest"
            },
            {
                ms: "Printer",
                en: "Printer"
            },
            {
                ms: "Administrator",
                en: "Administrator"
            },
            {
                ms: "Anonymous",
                en: "Anonymous"
            }
        ],

        answer: 2,

        ok: {
            ms: "Tahniah! Jawapan anda betul. Akaun Administrator digunakan untuk menjalankan konfigurasi awal dan menguruskan Windows Server.",
            en: "Congratulations! Your answer is correct. The Administrator account is used for initial configuration and management of Windows Server."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Akaun utama yang perlu ditetapkan selepas pemasangan ialah akaun Administrator.",
            en: "Your answer is incorrect. Please try again. The main account that must be configured after installation is the Administrator account."
        }
    },


    {
        id: 6,

        q: {
            ms: "Apakah fungsi utama Active Directory Domain Services?",
            en: "What is the main function of Active Directory Domain Services?"
        },

        options: [
            {
                ms: "Mengawal suhu bilik server",
                en: "Control the server room temperature"
            },
            {
                ms: "Mengurus pengguna, komputer dan akses domain",
                en: "Manage users, computers and domain access"
            },
            {
                ms: "Membersihkan habuk pada server",
                en: "Remove dust from the server"
            },
            {
                ms: "Membaiki kabel elektrik",
                en: "Repair electrical cables"
            }
        ],

        answer: 1,

        ok: {
            ms: "Tahniah! Jawapan anda betul. AD DS digunakan untuk mengurus akaun pengguna, komputer, kumpulan dan kebenaran akses dalam domain.",
            en: "Congratulations! Your answer is correct. AD DS manages user accounts, computers, groups and access permissions within a domain."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. AD DS digunakan untuk mengurus pengguna, komputer dan kebenaran akses dalam domain.",
            en: "Your answer is incorrect. Please try again. AD DS manages users, computers and access permissions within a domain."
        }
    },


    {
        id: 7,

        q: {
            ms: "Apakah fungsi utama DNS?",
            en: "What is the main function of DNS?"
        },

        options: [
            {
                ms: "Memberikan bekalan elektrik kepada server",
                en: "Supply electrical power to the server"
            },
            {
                ms: "Memadam fail sementara",
                en: "Delete temporary files"
            },
            {
                ms: "Menterjemahkan nama domain kepada alamat IP",
                en: "Translate domain names into IP addresses"
            },
            {
                ms: "Menggantikan RAM server",
                en: "Replace server RAM"
            }
        ],

        answer: 2,

        ok: {
            ms: "Tahniah! Jawapan anda betul. DNS menterjemahkan nama domain kepada alamat IP supaya komputer dapat mencari server dalam rangkaian.",
            en: "Congratulations! Your answer is correct. DNS translates domain names into IP addresses so computers can locate servers on the network."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. DNS digunakan untuk menterjemahkan nama domain kepada alamat IP.",
            en: "Your answer is incorrect. Please try again. DNS is used to translate domain names into IP addresses."
        }
    },


    {
        id: 8,

        q: {
            ms: "Apakah fungsi utama DHCP?",
            en: "What is the main function of DHCP?"
        },

        options: [
            {
                ms: "Memasang Windows Server",
                en: "Install Windows Server"
            },
            {
                ms: "Mengimbas kerosakan cakera keras",
                en: "Scan hard disk failures"
            },
            {
                ms: "Memadam nama domain",
                en: "Delete domain names"
            },
            {
                ms: "Memberikan alamat IP secara automatik kepada client",
                en: "Assign IP addresses automatically to clients"
            }
        ],

        answer: 3,

        ok: {
            ms: "Tahniah! Jawapan anda betul. DHCP mengagihkan alamat IP dan tetapan rangkaian kepada client secara automatik.",
            en: "Congratulations! Your answer is correct. DHCP automatically distributes IP addresses and network settings to clients."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. DHCP digunakan untuk memberikan alamat IP dan konfigurasi rangkaian secara automatik kepada client.",
            en: "Your answer is incorrect. Please try again. DHCP automatically assigns IP addresses and network settings to clients."
        }
    },


    {
        id: 9,

        q: {
            ms: "Mengapakah kemas kini keselamatan perlu dipasang pada server?",
            en: "Why must security updates be installed on a server?"
        },

        options: [
            {
                ms: "Menutup kelemahan keselamatan sistem",
                en: "Fix system security vulnerabilities"
            },
            {
                ms: "Mengurangkan kapasiti RAM",
                en: "Reduce RAM capacity"
            },
            {
                ms: "Memadam semua akaun pengguna",
                en: "Delete all user accounts"
            },
            {
                ms: "Menukar fungsi DNS kepada DHCP",
                en: "Change DNS functions into DHCP"
            }
        ],

        answer: 0,

        ok: {
            ms: "Tahniah! Jawapan anda betul. Kemas kini keselamatan menutup kelemahan sistem yang boleh dieksploitasi oleh virus, malware atau penyerang.",
            en: "Congratulations! Your answer is correct. Security updates fix vulnerabilities that could be exploited by viruses, malware or attackers."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Kemas kini keselamatan perlu dipasang untuk menutup kelemahan dan melindungi server daripada ancaman.",
            en: "Your answer is incorrect. Please try again. Security updates are installed to fix vulnerabilities and protect the server from threats."
        }
    },


    {
        id: 10,

        q: {
            ms: "Apakah maklumat penting yang perlu ada dalam rekod penyelenggaraan server?",
            en: "What important information must be included in a server maintenance record?"
        },

        options: [
            {
                ms: "Warna pakaian juruteknik",
                en: "The technician's clothing colour"
            },
            {
                ms: "Bilangan tingkap dalam bangunan",
                en: "The number of windows in the building"
            },
            {
                ms: "Makanan kegemaran pengguna",
                en: "The user's favourite food"
            },
            {
                ms: "Tarikh, masalah, tindakan dan pengesahan",
                en: "Date, problem, action and verification"
            }
        ],

        answer: 3,

        ok: {
            ms: "Tahniah! Jawapan anda betul. Rekod penyelenggaraan perlu mengandungi tarikh, masalah, tindakan yang telah dilakukan dan pengesahan supaya boleh dirujuk serta diaudit.",
            en: "Congratulations! Your answer is correct. A maintenance record must contain the date, problem, actions taken and verification for reference and auditing."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Rekod penyelenggaraan perlu mempunyai tarikh, masalah, tindakan dan pengesahan.",
            en: "Your answer is incorrect. Please try again. A maintenance record must contain the date, problem, action and verification."
        }
    }

];
