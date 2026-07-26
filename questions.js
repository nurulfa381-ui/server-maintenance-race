/* =========================================================
   SERVER HERO RACE™
   QUESTIONS.JS FULL VERSION V4
   BANK SOALAN C05 – PENYELENGGARAAN SERVER

   Jenis soalan:
   1. Objektif
   2. Padanan
   3. Susunan / Drag & Drop

   Bahasa:
   - Bahasa Melayu Malaysia
   - English
========================================================= */

window.SERVER_HERO_QUESTIONS = [

    /* =====================================================
       SOALAN 1 — KP01
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
                en: "Record and check the server information"
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
            en: "Congratulations! Server information must be recorded and checked so the technician understands its specifications, configuration and condition."
        },

        bad: {
            ms: "Jawapan anda salah. Sila cuba lagi. Tindakan pertama ialah merekod dan menyemak maklumat server.",
            en: "Your answer is incorrect. Please try again. The first action is to record and check the server information."
        }
    },


    /* =====================================================
       SOALAN 2 — KP01
    ===================================================== */

    {
        id: 2,
        type: "objective",

        q: {
            ms: "Maklumat manakah perlu direkod sebelum penyelenggaraan server?",
            en: "Which information should be recorded before server maintenance?"
        },

        options: [
            {
                ms: "Nama pengguna media sosial",
                en: "Social media usernames"
            },
            {
                ms: "Warna meja komputer",
                en: "Computer desk colour"
            },
            {
                ms: "Model, nombor siri dan konfigurasi server",
                en: "Server model, serial number and configuration"
            },
            {
                ms: "Bilangan kerusi di bilik server",
                en: "Number of chairs in the server room"
            }
        ],

        answer: 2,

        ok: {
            ms: "Betul. Model, nombor siri dan konfigurasi server membantu juruteknik mengenal pasti aset dan keadaan sistem dengan tepat.",
            en: "Correct. The server model, serial number and configuration help technicians identify the asset and system condition accurately."
        },

        bad: {
            ms: "Jawapan anda salah. Rekod penting ialah model, nombor siri dan konfigurasi server.",
            en: "Your answer is incorrect. Important records include the server model, serial number and configuration."
        }
    },


    /* =====================================================
       SOALAN 3 — KP02
    ===================================================== */

    {
        id: 3,
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
                ms: "Menghentikan semua rangkaian",
                en: "Stop the entire network"
            }
        ],

        answer: 2,

        ok: {
            ms: "Tahniah! Penyelenggaraan pencegahan dilakukan secara berkala untuk mengesan masalah lebih awal dan mengurangkan risiko kerosakan.",
            en: "Congratulations! Preventive maintenance is performed regularly to detect problems early and reduce the risk of failure."
        },

        bad: {
            ms: "Jawapan anda salah. Penyelenggaraan pencegahan bertujuan mengurangkan risiko kerosakan sebelum masalah serius berlaku.",
            en: "Your answer is incorrect. Preventive maintenance reduces the risk of failure before a serious problem occurs."
        }
    },


    /* =====================================================
       SOALAN 4 — KP02
    ===================================================== */

    {
        id: 4,
        type: "objective",

        q: {
            ms: "Apakah contoh penyelenggaraan pembetulan?",
            en: "What is an example of corrective maintenance?"
        },

        options: [
            {
                ms: "Membersihkan habuk setiap bulan",
                en: "Cleaning dust every month"
            },
            {
                ms: "Menggantikan cakera keras yang rosak",
                en: "Replacing a failed hard disk"
            },
            {
                ms: "Merekod suhu bilik setiap hari",
                en: "Recording room temperature daily"
            },
            {
                ms: "Menyemak log secara mingguan",
                en: "Checking logs weekly"
            }
        ],

        answer: 1,

        ok: {
            ms: "Betul. Menggantikan cakera keras yang rosak ialah penyelenggaraan pembetulan kerana tindakan dibuat selepas kerosakan berlaku.",
            en: "Correct. Replacing a failed hard disk is corrective maintenance because the action is taken after a failure occurs."
        },

        bad: {
            ms: "Jawapan anda salah. Penyelenggaraan pembetulan dilakukan selepas berlaku kerosakan, contohnya menggantikan cakera keras yang rosak.",
            en: "Your answer is incorrect. Corrective maintenance is performed after a failure, such as replacing a failed hard disk."
        }
    },


    /* =====================================================
       SOALAN 5 — KP03
    ===================================================== */

    {
        id: 5,
        type: "objective",

        q: {
            ms: "Mengapakah bilik server perlu dikawal daripada akses tanpa kebenaran?",
            en: "Why must the server room be protected from unauthorised access?"
        },

        options: [
            {
                ms: "Untuk mengurangkan penggunaan lampu",
                en: "To reduce lighting usage"
            },
            {
                ms: "Untuk melindungi peralatan dan data",
                en: "To protect equipment and data"
            },
            {
                ms: "Untuk meningkatkan bunyi kipas",
                en: "To increase fan noise"
            },
            {
                ms: "Untuk memudahkan orang ramai masuk",
                en: "To allow public access"
            }
        ],

        answer: 1,

        ok: {
            ms: "Betul. Kawalan akses melindungi server, konfigurasi dan data daripada kecurian, kerosakan atau perubahan tanpa kebenaran.",
            en: "Correct. Access control protects servers, configurations and data from theft, damage or unauthorised changes."
        },

        bad: {
            ms: "Jawapan anda salah. Akses bilik server perlu dikawal untuk melindungi peralatan dan data.",
            en: "Your answer is incorrect. Server room access must be controlled to protect equipment and data."
        }
    },


    /* =====================================================
       SOALAN 6 — KP03
    ===================================================== */

    {
        id: 6,
        type: "objective",

        q: {
            ms: "Apakah tindakan keselamatan sebelum membuka casing server?",
            en: "What safety action should be taken before opening a server casing?"
        },

        options: [
            {
                ms: "Hidupkan semua aplikasi",
                en: "Start all applications"
            },
            {
                ms: "Putuskan bekalan kuasa dan gunakan gelang ESD",
                en: "Disconnect the power and use an ESD wrist strap"
            },
            {
                ms: "Siram server dengan air",
                en: "Pour water on the server"
            },
            {
                ms: "Sentuh semua komponen dengan tangan kosong",
                en: "Touch all components with bare hands"
            }
        ],

        answer: 1,

        ok: {
            ms: "Betul. Bekalan kuasa perlu diputuskan dan gelang ESD digunakan untuk mengelakkan renjatan elektrik serta kerosakan komponen.",
            en: "Correct. Power must be disconnected and an ESD wrist strap used to prevent electric shock and component damage."
        },

        bad: {
            ms: "Jawapan anda salah. Putuskan bekalan kuasa dan gunakan gelang ESD sebelum membuka casing server.",
            en: "Your answer is incorrect. Disconnect the power and use an ESD wrist strap before opening the server casing."
        }
    },


    /* =====================================================
       SOALAN 7 — KP04
    ===================================================== */

    {
        id: 7,
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
                ms: "Membersihkan habuk",
                en: "Remove dust"
            },
            {
                ms: "Mencipta domain",
                en: "Create a domain"
            },
            {
                ms: "Memberikan alamat IP",
                en: "Assign IP addresses"
            }
        ],

        answer: 0,

        ok: {
            ms: "Tahniah! Multimeter digunakan untuk menguji voltan, rintangan dan kesinambungan litar elektrik.",
            en: "Congratulations! A multimeter tests voltage, resistance and electrical continuity."
        },

        bad: {
            ms: "Jawapan anda salah. Multimeter digunakan untuk menguji voltan dan kesinambungan litar.",
            en: "Your answer is incorrect. A multimeter tests voltage and circuit continuity."
        }
    },


    /* =====================================================
       SOALAN 8 — KP04
    ===================================================== */

    {
        id: 8,
        type: "objective",

        q: {
            ms: "Apakah alat sesuai untuk membersihkan habuk dalam casing server?",
            en: "Which tool is suitable for removing dust inside a server casing?"
        },

        options: [
            {
                ms: "Berus cat basah",
                en: "Wet paint brush"
            },
            {
                ms: "Mini vacuum atau udara termampat",
                en: "Mini vacuum or compressed air"
            },
            {
                ms: "Tukul besi",
                en: "Metal hammer"
            },
            {
                ms: "Air sabun",
                en: "Soapy water"
            }
        ],

        answer: 1,

        ok: {
            ms: "Betul. Mini vacuum atau udara termampat sesuai digunakan untuk membuang habuk tanpa merosakkan komponen.",
            en: "Correct. A mini vacuum or compressed air can remove dust without damaging components."
        },

        bad: {
            ms: "Jawapan anda salah. Gunakan mini vacuum atau udara termampat untuk membersihkan habuk.",
            en: "Your answer is incorrect. Use a mini vacuum or compressed air to remove dust."
        }
    },


    /* =====================================================
       SOALAN 9 — KP05
    ===================================================== */

    {
        id: 9,
        type: "objective",

        q: {
            ms: "Apakah akaun utama yang ditetapkan selepas Windows Server 2019 dipasang?",
            en: "Which main account is configured after Windows Server 2019 is installed?"
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
            ms: "Betul. Akaun Administrator digunakan untuk konfigurasi awal dan pengurusan Windows Server.",
            en: "Correct. The Administrator account is used for initial configuration and Windows Server management."
        },

        bad: {
            ms: "Jawapan anda salah. Akaun utama selepas pemasangan ialah Administrator.",
            en: "Your answer is incorrect. The main account after installation is Administrator."
        }
    },


    /* =====================================================
       SOALAN 10 — KP05
    ===================================================== */

    {
        id: 10,
        type: "objective",

        q: {
            ms: "Apakah tetapan penting selepas Windows Server 2019 dipasang?",
            en: "Which setting is important after Windows Server 2019 is installed?"
        },

        options: [
            {
                ms: "Tetapkan nama server dan alamat IP statik",
                en: "Configure the server name and static IP address"
            },
            {
                ms: "Padam semua driver",
                en: "Delete all drivers"
            },
            {
                ms: "Matikan kad rangkaian",
                en: "Disable the network adapter"
            },
            {
                ms: "Padam akaun Administrator",
                en: "Delete the Administrator account"
            }
        ],

        answer: 0,

        ok: {
            ms: "Betul. Nama server dan alamat IP statik penting supaya server dapat dikenal pasti dan diakses dengan stabil dalam rangkaian.",
            en: "Correct. The server name and static IP address are important so the server can be identified and accessed reliably."
        },

        bad: {
            ms: "Jawapan anda salah. Selepas pemasangan, tetapkan nama server dan alamat IP statik.",
            en: "Your answer is incorrect. After installation, configure the server name and static IP address."
        }
    },


    /* =====================================================
       SOALAN 11 — KP06
    ===================================================== */

    {
        id: 11,
        type: "objective",

        q: {
            ms: "Apakah fungsi utama Active Directory Domain Services?",
            en: "What is the main function of Active Directory Domain Services?"
        },

        options: [
            {
                ms: "Mengawal suhu bilik server",
                en: "Control server room temperature"
            },
            {
                ms: "Mengurus pengguna, komputer dan akses domain",
                en: "Manage users, computers and domain access"
            },
            {
                ms: "Membersihkan server",
                en: "Clean the server"
            },
            {
                ms: "Membaiki kabel elektrik",
                en: "Repair electrical cables"
            }
        ],

        answer: 1,

        ok: {
            ms: "Betul. AD DS mengurus pengguna, komputer, kumpulan dan kebenaran akses dalam domain.",
            en: "Correct. AD DS manages users, computers, groups and access permissions in a domain."
        },

        bad: {
            ms: "Jawapan anda salah. AD DS digunakan untuk mengurus pengguna, komputer dan akses domain.",
            en: "Your answer is incorrect. AD DS manages users, computers and domain access."
        }
    },


    /* =====================================================
       SOALAN 12 — KP06
    ===================================================== */

    {
        id: 12,
        type: "objective",

        q: {
            ms: "Apakah fungsi Organizational Unit dalam Active Directory?",
            en: "What is the function of an Organizational Unit in Active Directory?"
        },

        options: [
            {
                ms: "Menyusun pengguna dan komputer mengikut bahagian",
                en: "Organise users and computers by department"
            },
            {
                ms: "Mengukur voltan server",
                en: "Measure server voltage"
            },
            {
                ms: "Membersihkan cakera keras",
                en: "Clean the hard disk"
            },
            {
                ms: "Memberikan bekalan elektrik",
                en: "Provide electrical power"
            }
        ],

        answer: 0,

        ok: {
            ms: "Betul. Organizational Unit digunakan untuk menyusun pengguna, komputer dan objek domain secara teratur.",
            en: "Correct. An Organizational Unit organises users, computers and domain objects."
        },

        bad: {
            ms: "Jawapan anda salah. Organizational Unit digunakan untuk menyusun pengguna dan komputer mengikut struktur organisasi.",
            en: "Your answer is incorrect. An Organizational Unit organises users and computers according to the organisation structure."
        }
    },


    /* =====================================================
       SOALAN 13 — KP07
    ===================================================== */

    {
        id: 13,
        type: "objective",

        q: {
            ms: "Apakah fungsi utama DNS?",
            en: "What is the main function of DNS?"
        },

        options: [
            {
                ms: "Memberikan bekalan elektrik",
                en: "Supply electrical power"
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
                ms: "Menggantikan RAM",
                en: "Replace RAM"
            }
        ],

        answer: 2,

        ok: {
            ms: "Betul. DNS menterjemahkan nama domain kepada alamat IP supaya komputer dapat mencari server.",
            en: "Correct. DNS translates domain names into IP addresses so computers can locate servers."
        },

        bad: {
            ms: "Jawapan anda salah. DNS menterjemahkan nama domain kepada alamat IP.",
            en: "Your answer is incorrect. DNS translates domain names into IP addresses."
        }
    },


    /* =====================================================
       SOALAN 14 — KP07
    ===================================================== */

    {
        id: 14,
        type: "objective",

        q: {
            ms: "Apakah arahan sesuai untuk menguji penyelesaian nama DNS?",
            en: "Which command is suitable for testing DNS name resolution?"
        },

        options: [
            {
                ms: "format",
                en: "format"
            },
            {
                ms: "nslookup",
                en: "nslookup"
            },
            {
                ms: "shutdown",
                en: "shutdown"
            },
            {
                ms: "mkdir",
                en: "mkdir"
            }
        ],

        answer: 1,

        ok: {
            ms: "Betul. Arahan nslookup digunakan untuk menguji penyelesaian nama domain dan alamat IP.",
            en: "Correct. The nslookup command tests domain name and IP address resolution."
        },

        bad: {
            ms: "Jawapan anda salah. Gunakan arahan nslookup untuk menguji DNS.",
            en: "Your answer is incorrect. Use the nslookup command to test DNS."
        }
    },


    /* =====================================================
       SOALAN 15 — KP08
    ===================================================== */

    {
        id: 15,
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
                ms: "Mengimbas cakera keras",
                en: "Scan hard disks"
            },
            {
                ms: "Memadam domain",
                en: "Delete domains"
            },
            {
                ms: "Memberikan alamat IP secara automatik",
                en: "Assign IP addresses automatically"
            }
        ],

        answer: 3,

        ok: {
            ms: "Betul. DHCP memberikan alamat IP dan tetapan rangkaian kepada client secara automatik.",
            en: "Correct. DHCP automatically assigns IP addresses and network settings to clients."
        },

        bad: {
            ms: "Jawapan anda salah. DHCP memberikan alamat IP secara automatik kepada client.",
            en: "Your answer is incorrect. DHCP automatically assigns IP addresses to clients."
        }
    },


    /* =====================================================
       SOALAN 16 — KP08
    ===================================================== */

    {
        id: 16,
        type: "objective",

        q: {
            ms: "Apakah fungsi DHCP Reservation?",
            en: "What is the function of a DHCP Reservation?"
        },

        options: [
            {
                ms: "Memberikan alamat IP tertentu kepada peranti tertentu",
                en: "Assign a specific IP address to a specific device"
            },
            {
                ms: "Memadam semua alamat IP",
                en: "Delete all IP addresses"
            },
            {
                ms: "Menukar nama domain",
                en: "Change the domain name"
            },
            {
                ms: "Menggantikan DNS",
                en: "Replace DNS"
            }
        ],

        answer: 0,

        ok: {
            ms: "Betul. DHCP Reservation memastikan peranti tertentu menerima alamat IP yang sama berdasarkan alamat MAC.",
            en: "Correct. A DHCP Reservation ensures a specific device receives the same IP address based on its MAC address."
        },

        bad: {
            ms: "Jawapan anda salah. DHCP Reservation memberikan alamat IP tertentu kepada peranti tertentu.",
            en: "Your answer is incorrect. A DHCP Reservation assigns a specific IP address to a specific device."
        }
    },


    /* =====================================================
       SOALAN 17 — KP09
    ===================================================== */

    {
        id: 17,
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
                ms: "Memadam semua pengguna",
                en: "Delete all users"
            },
            {
                ms: "Menukar DNS kepada DHCP",
                en: "Change DNS into DHCP"
            }
        ],

        answer: 0,

        ok: {
            ms: "Betul. Kemas kini keselamatan menutup kelemahan yang boleh dieksploitasi oleh malware atau penyerang.",
            en: "Correct. Security updates fix vulnerabilities that could be exploited by malware or attackers."
        },

        bad: {
            ms: "Jawapan anda salah. Kemas kini keselamatan melindungi server daripada ancaman.",
            en: "Your answer is incorrect. Security updates protect the server from threats."
        }
    },


    /* =====================================================
       SOALAN 18 — KP09
    ===================================================== */

    {
        id: 18,
        type: "objective",

        q: {
            ms: "Apakah tujuan membuat backup sebelum kemas kini sistem?",
            en: "What is the purpose of creating a backup before a system update?"
        },

        options: [
            {
                ms: "Memulihkan data jika kemas kini gagal",
                en: "Recover data if the update fails"
            },
            {
                ms: "Meningkatkan suhu server",
                en: "Increase server temperature"
            },
            {
                ms: "Memadam semua log",
                en: "Delete all logs"
            },
            {
                ms: "Mengurangkan kapasiti storan",
                en: "Reduce storage capacity"
            }
        ],

        answer: 0,

        ok: {
            ms: "Betul. Backup membolehkan data dan sistem dipulihkan jika kemas kini menyebabkan masalah.",
            en: "Correct. A backup allows data and the system to be restored if the update causes problems."
        },

        bad: {
            ms: "Jawapan anda salah. Backup dibuat supaya data dan sistem boleh dipulihkan jika kemas kini gagal.",
            en: "Your answer is incorrect. A backup allows data and the system to be restored if the update fails."
        }
    },


    /* =====================================================
       SOALAN 19 — KP10
    ===================================================== */

    {
        id: 19,
        type: "objective",

        q: {
            ms: "Apakah maklumat penting dalam rekod penyelenggaraan server?",
            en: "What information is important in a server maintenance record?"
        },

        options: [
            {
                ms: "Warna pakaian juruteknik",
                en: "Technician clothing colour"
            },
            {
                ms: "Bilangan tingkap",
                en: "Number of windows"
            },
            {
                ms: "Makanan kegemaran pengguna",
                en: "User's favourite food"
            },
            {
                ms: "Tarikh, masalah, tindakan dan pengesahan",
                en: "Date, problem, action and verification"
            }
        ],

        answer: 3,

        ok: {
            ms: "Betul. Rekod penyelenggaraan perlu mengandungi tarikh, masalah, tindakan dan pengesahan untuk rujukan serta audit.",
            en: "Correct. A maintenance record must contain the date, problem, action and verification for reference and auditing."
        },

        bad: {
            ms: "Jawapan anda salah. Rekod perlu mempunyai tarikh, masalah, tindakan dan pengesahan.",
            en: "Your answer is incorrect. The record must contain the date, problem, action and verification."
        }
    },


    /* =====================================================
       SOALAN 20 — KP10
    ===================================================== */

    {
        id: 20,
        type: "objective",

        q: {
            ms: "Mengapakah pengesahan pengguna diperlukan selepas penyelenggaraan?",
            en: "Why is user verification required after maintenance?"
        },

        options: [
            {
                ms: "Untuk memastikan server berfungsi seperti dikehendaki",
                en: "To ensure the server works as required"
            },
            {
                ms: "Untuk menukar warna server",
                en: "To change the server colour"
            },
            {
                ms: "Untuk menghapuskan semua rekod",
                en: "To delete all records"
            },
            {
                ms: "Untuk mematikan rangkaian",
                en: "To shut down the network"
            }
        ],

        answer: 0,

        ok: {
            ms: "Betul. Pengesahan pengguna memastikan server dan perkhidmatan berfungsi dengan baik selepas penyelenggaraan.",
            en: "Correct. User verification confirms that the server and services work correctly after maintenance."
        },

        bad: {
            ms: "Jawapan anda salah. Pengesahan pengguna memastikan server berfungsi seperti yang dikehendaki.",
            en: "Your answer is incorrect. User verification ensures the server works as required."
        }
    },


    /* =====================================================
       SOALAN 21 — PADANAN ALAT
    ===================================================== */

    {
        id: 21,
        type: "matching",

        q: {
            ms: "Padankan alat penyelenggaraan dengan fungsi yang betul.",
            en: "Match each maintenance tool with its correct function."
        },

        instruction: {
            ms: "Pilih alat di sebelah kiri dan fungsi yang sepadan di sebelah kanan.",
            en: "Select a tool on the left and its matching function on the right."
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
                    en: "Removes dust inside the server"
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
            ms: "Padanan anda salah. Sila pilih semula alat dan fungsi yang sepadan.",
            en: "Your match is incorrect. Please select the correct tool and function."
        }
    },


    /* =====================================================
       SOALAN 22 — PADANAN PERKHIDMATAN
    ===================================================== */

    {
        id: 22,
        type: "matching",

        q: {
            ms: "Padankan perkhidmatan server dengan fungsi yang betul.",
            en: "Match each server service with its correct function."
        },

        instruction: {
            ms: "Pilih perkhidmatan dan fungsi yang sepadan.",
            en: "Select each service and its matching function."
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
            ms: "Tahniah! Semua perkhidmatan server dipadankan dengan betul.",
            en: "Congratulations! All server services were matched correctly."
        },

        bad: {
            ms: "Padanan anda salah. Sila semak semula fungsi setiap perkhidmatan.",
            en: "Your match is incorrect. Please review the function of each service."
        }
    },


    /* =====================================================
       SOALAN 23 — PADANAN ARAHAN
    ===================================================== */

    {
        id: 23,
        type: "matching",

        q: {
            ms: "Padankan arahan rangkaian dengan fungsi yang betul.",
            en: "Match each network command with its correct function."
        },

        instruction: {
            ms: "Pilih arahan dan fungsi yang betul.",
            en: "Select each command and its correct function."
        },

        pairs: [
            {
                id: "ping",
                left: {
                    ms: "ping",
                    en: "ping"
                },
                right: {
                    ms: "Menguji sambungan rangkaian",
                    en: "Tests network connectivity"
                }
            },
            {
                id: "ipconfig",
                left: {
                    ms: "ipconfig",
                    en: "ipconfig"
                },
                right: {
                    ms: "Memaparkan konfigurasi alamat IP",
                    en: "Displays IP address configuration"
                }
            },
            {
                id: "nslookup",
                left: {
                    ms: "nslookup",
                    en: "nslookup"
                },
                right: {
                    ms: "Menguji penyelesaian nama DNS",
                    en: "Tests DNS name resolution"
                }
            },
            {
                id: "hostname",
                left: {
                    ms: "hostname",
                    en: "hostname"
                },
                right: {
                    ms: "Memaparkan nama komputer",
                    en: "Displays the computer name"
                }
            }
        ],

        ok: {
            ms: "Tahniah! Semua arahan rangkaian dipadankan dengan betul.",
            en: "Congratulations! All network commands were matched correctly."
        },

        bad: {
            ms: "Padanan anda salah. Sila semak semula fungsi arahan rangkaian.",
            en: "Your match is incorrect. Please review the network command functions."
        }
    },


    /* =====================================================
       SOALAN 24 — SUSUNAN PENYELENGGARAAN
    ===================================================== */

    {
        id: 24,
        type: "dragdrop",

        q: {
            ms: "Susun langkah penyelenggaraan server mengikut urutan yang betul.",
            en: "Arrange the server maintenance steps in the correct order."
        },

        instruction: {
            ms: "Pilih setiap langkah mengikut urutan yang betul.",
            en: "Select each step in the correct order."
        },

        items: [
            {
                id: "record",
                text: {
                    ms: "Rekod maklumat dan keadaan server",
                    en: "Record server information and condition"
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
                    en: "Perform maintenance work"
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
            ms: "Tahniah! Urutan penyelenggaraan anda betul.",
            en: "Congratulations! Your maintenance sequence is correct."
        },

        bad: {
            ms: "Susunan anda salah. Pastikan server direkod dan dimatikan dengan selamat sebelum penyelenggaraan.",
            en: "Your order is incorrect. Ensure the server is recorded and safely shut down before maintenance."
        }
    },


    /* =====================================================
       SOALAN 25 — SUSUNAN WINDOWS SERVER
    ===================================================== */

    {
        id: 25,
        type: "dragdrop",

        q: {
            ms: "Susun langkah pemasangan Windows Server 2019 mengikut urutan yang betul.",
            en: "Arrange the Windows Server 2019 installation steps in the correct order."
        },

        instruction: {
            ms: "Pilih langkah pemasangan mengikut urutan yang betul.",
            en: "Select the installation steps in the correct order."
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
                    en: "Select language and keyboard settings"
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
            ms: "Susunan anda salah. Proses bermula dengan boot daripada media pemasangan.",
            en: "Your order is incorrect. The process begins by booting from the installation media."
        }
    },


    /* =====================================================
       SOALAN 26 — SUSUNAN AD DS
    ===================================================== */

    {
        id: 26,
        type: "dragdrop",

        q: {
            ms: "Susun langkah asas pemasangan AD DS mengikut urutan yang betul.",
            en: "Arrange the basic AD DS installation steps in the correct order."
        },

        instruction: {
            ms: "Pilih langkah mengikut urutan yang betul.",
            en: "Select the steps in the correct order."
        },

        items: [
            {
                id: "staticip",
                text: {
                    ms: "Tetapkan alamat IP statik",
                    en: "Configure a static IP address"
                }
            },
            {
                id: "role",
                text: {
                    ms: "Tambah peranan Active Directory Domain Services",
                    en: "Add the Active Directory Domain Services role"
                }
            },
            {
                id: "promote",
                text: {
                    ms: "Promote server sebagai Domain Controller",
                    en: "Promote the server as a Domain Controller"
                }
            },
            {
                id: "domain",
                text: {
                    ms: "Tetapkan nama domain",
                    en: "Configure the domain name"
                }
            },
            {
                id: "restart",
                text: {
                    ms: "Mulakan semula server",
                    en: "Restart the server"
                }
            }
        ],

        correctOrder: [
            "staticip",
            "role",
            "promote",
            "domain",
            "restart"
        ],

        ok: {
            ms: "Tahniah! Urutan asas pemasangan AD DS anda betul.",
            en: "Congratulations! Your basic AD DS installation sequence is correct."
        },

        bad: {
            ms: "Susunan anda salah. Tetapkan alamat IP statik sebelum memasang dan mengkonfigurasi AD DS.",
            en: "Your order is incorrect. Configure a static IP address before installing and configuring AD DS."
        }
    }

];
