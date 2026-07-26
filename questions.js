/* =========================================================
   SERVER HERO RACE™
   QUESTIONS.JS FULL VERSION
   C05 – Server Maintenance
   Objektif + Padanan + Drag & Drop
   Bahasa Melayu Malaysia / English
========================================================= */

window.SERVER_HERO_QUESTIONS = [

    /* =====================================================
       SOALAN OBJEKTIF
    ===================================================== */

    {
        id: 1,
        type: "objective",

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
            ms: "Tahniah! Maklumat server perlu direkod dan disemak supaya juruteknik mengetahui spesifikasi, konfigurasi dan keadaan server sebelum penyelenggaraan.",
            en: "Congratulations! Server information must be recorded and checked so the technician understands its specifications, configuration and condition before maintenance."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Tindakan pertama ialah merekod dan menyemak maklumat server.",
            en: "Your answer is incorrect. Please try again. The first action is to record and check the server information."
        }
    },

    {
        id: 2,
        type: "objective",

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
            ms: "Tahniah! Penyelenggaraan pencegahan dilakukan secara berkala untuk mengesan masalah lebih awal dan mengurangkan risiko kerosakan.",
            en: "Congratulations! Preventive maintenance is performed regularly to detect problems early and reduce the risk of failure."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Penyelenggaraan pencegahan bertujuan mengurangkan risiko kerosakan sebelum masalah serius berlaku.",
            en: "Your answer is incorrect. Please try again. Preventive maintenance reduces the risk of failure before a serious problem occurs."
        }
    },

    {
        id: 3,
        type: "objective",

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
            ms: "Tahniah! Gelang ESD mengalirkan cas elektrostatik daripada badan pengguna supaya komponen elektronik tidak rosak.",
            en: "Congratulations! An ESD wrist strap safely discharges static electricity to protect electronic components."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Gelang ESD melindungi komponen elektronik daripada cas elektrostatik.",
            en: "Your answer is incorrect. Please try again. An ESD wrist strap protects electronic components from electrostatic discharge."
        }
    },

    {
        id: 4,
        type: "objective",

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
            ms: "Tahniah! Multimeter digunakan untuk menguji voltan, rintangan dan kesinambungan litar elektrik.",
            en: "Congratulations! A multimeter tests voltage, resistance and electrical continuity."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Multimeter digunakan untuk menguji voltan dan kesinambungan litar.",
            en: "Your answer is incorrect. Please try again. A multimeter tests voltage and circuit continuity."
        }
    },

    {
        id: 5,
        type: "objective",

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
            ms: "Tahniah! Akaun Administrator digunakan untuk konfigurasi awal dan pengurusan Windows Server.",
            en: "Congratulations! The Administrator account is used for initial configuration and Windows Server management."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Akaun utama selepas pemasangan ialah Administrator.",
            en: "Your answer is incorrect. Please try again. The main account after installation is Administrator."
        }
    },

    {
        id: 6,
        type: "objective",

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
            ms: "Tahniah! AD DS mengurus akaun pengguna, komputer, kumpulan dan kebenaran akses dalam domain.",
            en: "Congratulations! AD DS manages user accounts, computers, groups and access permissions in a domain."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. AD DS digunakan untuk mengurus pengguna, komputer dan akses domain.",
            en: "Your answer is incorrect. Please try again. AD DS manages users, computers and domain access."
        }
    },

    {
        id: 7,
        type: "objective",

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
            ms: "Tahniah! DNS menterjemahkan nama domain kepada alamat IP supaya komputer dapat mencari server dalam rangkaian.",
            en: "Congratulations! DNS translates domain names into IP addresses so computers can locate servers on the network."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. DNS menterjemahkan nama domain kepada alamat IP.",
            en: "Your answer is incorrect. Please try again. DNS translates domain names into IP addresses."
        }
    },

    {
        id: 8,
        type: "objective",

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
            ms: "Tahniah! DHCP mengagihkan alamat IP dan tetapan rangkaian kepada client secara automatik.",
            en: "Congratulations! DHCP automatically distributes IP addresses and network settings to clients."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. DHCP memberikan alamat IP secara automatik kepada client.",
            en: "Your answer is incorrect. Please try again. DHCP automatically assigns IP addresses to clients."
        }
    },

    {
        id: 9,
        type: "objective",

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
            ms: "Tahniah! Kemas kini keselamatan menutup kelemahan sistem yang boleh dieksploitasi oleh malware atau penyerang.",
            en: "Congratulations! Security updates fix vulnerabilities that could be exploited by malware or attackers."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Kemas kini keselamatan melindungi server daripada ancaman.",
            en: "Your answer is incorrect. Please try again. Security updates protect the server from threats."
        }
    },

    {
        id: 10,
        type: "objective",

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
            ms: "Tahniah! Rekod penyelenggaraan perlu mengandungi tarikh, masalah, tindakan dan pengesahan untuk rujukan dan audit.",
            en: "Congratulations! A maintenance record must contain the date, problem, action and verification for reference and auditing."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Rekod perlu mempunyai tarikh, masalah, tindakan dan pengesahan.",
            en: "Your answer is incorrect. Please try again. The record must include the date, problem, action and verification."
        }
    },

    /* =====================================================
       SOALAN PADANAN
    ===================================================== */

    {
        id: 11,
        type: "matching",

        q: {
            ms: "Padankan alat penyelenggaraan dengan fungsi yang betul.",
            en: "Match each maintenance tool with its correct function."
        },

        instruction: {
            ms: "Pilih satu alat di sebelah kiri, kemudian pilih fungsi yang betul di sebelah kanan.",
            en: "Select a tool on the left, then select its correct function on the right."
        },

        pairs: [
            {
                id: "esd",
                left: {
                    ms: "Gelang ESD",
                    en: "ESD wrist strap"
                },
                right: {
                    ms: "Melindungi komponen daripada cas elektrostatik",
                    en: "Protects components from electrostatic discharge"
                }
            },
            {
                id: "multimeter",
                left: {
                    ms: "Multimeter",
                    en: "Multimeter"
                },
                right: {
                    ms: "Menguji voltan dan kesinambungan litar",
                    en: "Tests voltage and circuit continuity"
                }
            },
            {
                id: "vacuum",
                left: {
                    ms: "Mini vacuum",
                    en: "Mini vacuum"
                },
                right: {
                    ms: "Membersihkan habuk dalam server",
                    en: "Removes dust from inside the server"
                }
            },
            {
                id: "screwdriver",
                left: {
                    ms: "Pemutar skru",
                    en: "Screwdriver"
                },
                right: {
                    ms: "Membuka dan memasang skru casing",
                    en: "Removes and installs casing screws"
                }
            }
        ],

        ok: {
            ms: "Tahniah! Semua alat telah dipadankan dengan fungsi yang betul.",
            en: "Congratulations! All tools have been matched with their correct functions."
        },

        bad: {
            ms: "Padanan anda kurang tepat. Sila pilih semula alat dan fungsi yang sepadan.",
            en: "Your match is incorrect. Please select the matching tool and function again."
        }
    },

    {
        id: 12,
        type: "matching",

        q: {
            ms: "Padankan perkhidmatan server dengan fungsi yang betul.",
            en: "Match each server service with its correct function."
        },

        instruction: {
            ms: "Pilih perkhidmatan di sebelah kiri dan fungsi yang sepadan di sebelah kanan.",
            en: "Select a service on the left and its matching function on the right."
        },

        pairs: [
            {
                id: "adds",
                left: {
                    ms: "AD DS",
                    en: "AD DS"
                },
                right: {
                    ms: "Mengurus pengguna, komputer dan domain",
                    en: "Manages users, computers and domains"
                }
            },
            {
                id: "dns",
                left: {
                    ms: "DNS",
                    en: "DNS"
                },
                right: {
                    ms: "Menterjemah nama domain kepada alamat IP",
                    en: "Translates domain names into IP addresses"
                }
            },
            {
                id: "dhcp",
                left: {
                    ms: "DHCP",
                    en: "DHCP"
                },
                right: {
                    ms: "Memberikan alamat IP secara automatik",
                    en: "Assigns IP addresses automatically"
                }
            },
            {
                id: "backup",
                left: {
                    ms: "Backup",
                    en: "Backup"
                },
                right: {
                    ms: "Menyediakan salinan data untuk pemulihan",
                    en: "Provides a copy of data for recovery"
                }
            }
        ],

        ok: {
            ms: "Tahniah! Semua perkhidmatan server telah dipadankan dengan betul.",
            en: "Congratulations! All server services have been matched correctly."
        },

        bad: {
            ms: "Padanan anda salah. Sila semak semula fungsi setiap perkhidmatan server.",
            en: "Your match is incorrect. Please review the function of each server service."
        }
    },

    /* =====================================================
       SOALAN DRAG & DROP / SUSUNAN
    ===================================================== */

    {
        id: 13,
        type: "dragdrop",

        q: {
            ms: "Susun langkah penyelenggaraan server mengikut urutan yang betul.",
            en: "Arrange the server maintenance steps in the correct order."
        },

        instruction: {
            ms: "Klik atau seret setiap langkah mengikut urutan yang betul.",
            en: "Click or drag each step into the correct order."
        },

        items: [
            {
                id: "record",
                text: {
                    ms: "Rekod maklumat dan keadaan server",
                    en: "Record the server information and condition"
                }
            },
            {
                id: "shutdown",
                text: {
                    ms: "Matikan server menggunakan prosedur yang betul",
                    en: "Shut down the server using the correct procedure"
                }
            },
            {
                id: "maintain",
                text: {
                    ms: "Laksanakan kerja penyelenggaraan",
                    en: "Perform the maintenance work"
                }
            },
            {
                id: "test",
                text: {
                    ms: "Hidupkan dan uji server",
                    en: "Start and test the server"
                }
            },
            {
                id: "report",
                text: {
                    ms: "Kemas kini rekod penyelenggaraan",
                    en: "Update the maintenance record"
                }
            }
        ],

        correctOrder: [
            "record",
            "shutdown",
            "maintain",
            "test",
            "report"
        ],

        ok: {
            ms: "Tahniah! Urutan penyelenggaraan anda betul. Server perlu direkod, dimatikan dengan selamat, diselenggara, diuji dan direkod semula.",
            en: "Congratulations! Your maintenance sequence is correct. The server must be recorded, safely shut down, maintained, tested and documented."
        },

        bad: {
            ms: "Susunan anda salah. Sila cuba lagi dan pastikan server direkod serta dimatikan dengan selamat sebelum penyelenggaraan.",
            en: "Your order is incorrect. Please try again and ensure the server is recorded and safely shut down before maintenance."
        }
    },

    {
        id: 14,
        type: "dragdrop",

        q: {
            ms: "Susun langkah pemasangan Windows Server 2019 mengikut urutan yang betul.",
            en: "Arrange the Windows Server 2019 installation steps in the correct order."
        },

        instruction: {
            ms: "Klik atau seret langkah pemasangan mengikut urutan yang betul.",
            en: "Click or drag the installation steps into the correct order."
        },

        items: [
            {
                id: "boot",
                text: {
                    ms: "Boot daripada media pemasangan",
                    en: "Boot from the installation media"
                }
            },
            {
                id: "language",
                text: {
                    ms: "Pilih bahasa dan tetapan papan kekunci",
                    en: "Select the language and keyboard settings"
                }
            },
            {
                id: "edition",
                text: {
                    ms: "Pilih edisi Windows Server 2019",
                    en: "Select the Windows Server 2019 edition"
                }
            },
            {
                id: "drive",
                text: {
                    ms: "Pilih pemacu pemasangan",
                    en: "Select the installation drive"
                }
            },
            {
                id: "password",
                text: {
                    ms: "Tetapkan kata laluan Administrator",
                    en: "Set the Administrator password"
                }
            }
        ],

        correctOrder: [
            "boot",
            "language",
            "edition",
            "drive",
            "password"
        ],

        ok: {
            ms: "Tahniah! Urutan pemasangan Windows Server 2019 anda betul.",
            en: "Congratulations! Your Windows Server 2019 installation sequence is correct."
        },

        bad: {
            ms: "Susunan anda salah. Sila cuba lagi. Proses bermula dengan boot daripada media pemasangan.",
            en: "Your order is incorrect. Please try again. The process starts by booting from the installation media."
        }
    }

];
