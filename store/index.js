import { LuSmartphoneCharging } from 'react-icons/lu'
import { HiOutlineLogin, HiOutlineSupport } from 'react-icons/hi'
import { AiFillGift, AiOutlineDatabase, AiOutlineDollarCircle, AiOutlineShareAlt } from 'react-icons/ai'
import { FaAffiliatetheme } from 'react-icons/fa'
import { IoStatsChart } from 'react-icons/io5'
import { CiGlobe } from 'react-icons/ci'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FiEdit, FiHome, FiMail } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import { BsChatLeftQuoteFill, BsMusicNoteBeamed } from 'react-icons/bs'
import { BiMessageAltDots, BiTimeFive } from 'react-icons/bi'
import { MdOutlinePayment } from 'react-icons/md'
export const initialValue = {
    logoSrc: "/images/logo.png",
    home: {
        navbar: [
            {
                path: '/#',
                value: 'Home'
            },{
                path: '#feature',
                value: 'Fitur'
            },{
                path: '#theme',
                value: 'Tema'
            },{
                path: '#price',
                value: 'Harga'
            },{
                path: '/portfolio',
                value: 'Portfolio'
            },
        ],
        hero: {
            title: 'Website Undangan Pernikahan Online',
            description: 'Undang orang-orang terdekat dalam momen kebahagiaan pernikahan Anda dengan cara yang unik dan menarik. Coba buat undangan pernikahan online gratis sekarang juga!',
            img: '/images/heroimg.png'
        },
        interest: {
            title: 'Website Undangan Gratis Terbaik Di Indonesia',
            description: 'WeddingNesia adalah platform untuk pembuatan undangan pernikahan online gratis terbaik sejak 2023.',
            bold: 'Inilah alasan mereka memilih WeddingNesia',
            img: '/images/scanner.png',
            items: [
                {
                    logo: <LuSmartphoneCharging />,
                    title: 'Smart System',
                    description: 'WeddingNesia memiliki sistem yang mudah digunakan dan mendukung kustomisasi yang sangat fleksibel. Anda bisa mengatur undangan sesuai keinginan dan keperluan.'
                },
                {
                    logo: <AiOutlineDollarCircle />,
                    title: 'Harga Terjangkau',
                    description: 'Anda tidak akan menemukan layanan undangan online lain yang lebih murah dari Datengdong dengan kualitas layanan yang setara.'
                },
                {
                    logo: <HiOutlineSupport />,
                    title: 'Tim Support Responsif',
                    description: 'Tidak perlu menunggu lama, selesaikan masalah Anda dengan cepat secara real time melalui live chat whatsapp bersama tim support kami.'
                },
                {
                    logo: <FaAffiliatetheme />,
                    title: 'Banyak Pilihan Tema',
                    description: 'Tersedia banyak pilihan tema siap pakai yang dapat di sesuaikan dengan selera Anda kapan saja tanpa batas.'
                },
            ]
        },
        tutorial: {
            title: '4 Langkah Buat Undangan Digital',
            description: 'Cukup lakukan 4 langkah untuk buat website undangan digital sendiri. Untuk lebih jelasnya silakan ikuti petunjuk di bawah ini',
            img: '/images/mockuplaptop.png',
            items: [
                {
                    icon: <HiOutlineLogin />,
                    title: 'Daftar',
                    description: 'Isi alamat website yang diinginkan, email dan password akun milik Anda, kemudian lakukan aktivasi akun'
                },
                {
                    icon: <AiOutlineDatabase />,
                    title: 'Isi Informasi',
                    description: 'Isi seluruh informasi seperti waktu, lokasi, foto & video dan daftarkan tamu undangan Anda.'
                },
                {
                    icon: <AiOutlineShareAlt />,
                    title: 'Share',
                    description: 'Website undangan pernikahan online sudah siap dibagikan ke seluruh tamu undangan.'
                },
                {
                    icon: <IoStatsChart />,
                    title: 'Pantau',
                    description: 'Lihat statistik tamu yang hadir dan baca ucapan doa dari tamu yang telah di undang.'
                },
            ]
        },
        feature: {
            title: 'Fitur Terbaik',
            description: 'Berbagai macam fitur terbaik undangan online yang Anda butuhkan ada disini dan kami akan selalu berinovasi menambahkan fitur-fitur lainnya.',
            items: [
                {
                    icon: <CiGlobe />,
                    title: 'Domain Eksklusif',
                    description: 'Menggunakan mekanisme subdomain dan tersedia paket custom domain (white label)'
                },
                {
                    icon: <FaPeopleGroup />,
                    title: 'Custom Nama Tamu',
                    description: 'Satu tamu, satu undangan. Selayaknya undangan pernikahan fisik'
                },
                {
                    icon: <FiEdit />,
                    title: 'Full Custom Text',
                    description: 'Seluruh teks pada undangan dapat Anda ubah sesuai keinginan'
                },
                {
                    icon: <RxDashboard />,
                    title: 'Interaktif Dashboard',
                    description: 'Menggunakan dashboard dengan tampilan dan cara penggunaan yang mudah dimengerti'
                },
                {
                    icon: <BsMusicNoteBeamed />,
                    title: 'Konten Lengkap',
                    description: 'Tersedia berbagai jenis konten baik teks, gambar, link, peta, musik hingga video'
                },
                {
                    icon: <FaAffiliatetheme />,
                    title: 'Tema Instan',
                    description: 'Tersedia satu macam tema siap pakai yang dapat diganti kapan saja tanpa batas'
                },
                {
                    icon: <FaPeopleGroup />,
                    title: 'Manajemen Tamu',
                    description: 'Fitur pengaturan tamu baik personal / grup sesuai preferensi (undangan / informasi)'
                },
                {
                    icon: <BiMessageAltDots />,
                    title: 'Reservasi & Buku Tamu',
                    description: 'Fitur penerima ucapan dari tamu dan konfirmasi kehadiran dengan manajemen data yang baik'
                },
                {
                    icon: <MdOutlinePayment />,
                    title: 'Pembayaran Mudah',
                    description: 'Pembayaran dapat dilakukan kapan saja, mudah, otomatis dengan metode pembayaran yang lengkap'
                },
                {
                    icon: <BsChatLeftQuoteFill />,
                    title: 'Story & Quotes',
                    description: 'Ceritakan perjalanan / deskripsi undangan Anda & tambahkan quotes kepada tamu undangan'
                },
                {
                    icon: <AiFillGift />,
                    title: 'Hadiah',
                    description: 'Tersedia fitur kirim hadiah secara online ke rekening kamu atau alamat melalui undanganmu'
                },
                {
                    icon: <BiTimeFive />,
                    title: 'Countdown Timer',
                    description: 'Tersedia fitur countdown timer yang dapat berfungsi sebagai pengingat waktu acara'
                },
            ]
        },
        testimonials: {
            title: "Testimoni",
            description: "Bukti nyata bahwa datengdong telah menjadi bagian kebahagiaan momen terbaik mereka.",
            button: {
                value: "Lihat Portfolio",
                href: "/portfolio"
            },
            items: [
                {
                    avatar: "/images/avatar1.svg",
                    name: "Ucup Permana",
                    job: "Karyawan Swasta",
                    comment: "Baru kali ini ada platform undangan online pernikahan yang gratis dan simple. Terimakasih WeddingNesia."
                },
                {
                    avatar: "/images/avatar2.svg",
                    name: "Hugo Jayana",
                    job: "Wirausahawan",
                    comment: "Sangat mudah digunakan, undangan pernikahan langsung bisa dibagikan dengan cepat! Sukses WeddingNesia."
                },
                {
                    avatar: "/images/avatar3.svg",
                    name: "Suci Hanina",
                    job: "Perawat",
                    comment: "Di jaman digital sekarang ini undangan online pernikahan sangat membantu sekali. Thank WeddingNesia."
                },
            ]
        },
        footer: {
            whiteLogo: "/images/whitelogo.png"
        }
    },
    dashboard: {
        user: {
            navbar: [
                {
                    icon: <FiHome />,
                    label: "Beranda",
                    href: '/dashboard'
                },
                {
                    icon: <FiMail />,
                    label: "Undangan",
                    href: '/dashboard/invitations'
                },
            ],
            title: "50K+",
            description: 'Undangan Telah Disebar',
            src: "/images/beranda.svg",
            greeting: 'Selamat Datang Di',
            bold: 'WeddingNesia!',
            caption: 'Platform pembuatan undangan pernikahan online gratis terbesar di Indonesia.'
        }
    }
}
