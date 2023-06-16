import Hero from '../assets/img/hero-2.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import myHero from '../assets/img/hero-green.png'
import { artikel } from '../data';
import Earth from '../assets/img/earth.jpg'
import Warming from '../assets/img/warming.jpg'

const HomePage = () => {
    return (
        <div className="homePage">
            <header className="header w-100 min-vh-100">
                <Container> 
                    <Row className='main'>
                        <Col>
                        <img src={myHero} alt="" width="100%"/>
                        </Col>
                        <Col className='hero-title'>
                        <h1>Together We Can <br />Create A Brighter <br /> Future For All</h1>
                        </Col>
                    </Row>


                {/* <Row className='header-box d-flex align-items-center info-text'>
                    <Col>
                        <img src={myHero} width="100%" className='hero-page' />
                    </Col>
                    <Col className='hero-title text-end'>
                        <h1>Together We Can</h1>
                        <h1>Create A Brighter</h1>
                        <h1>Future For All</h1>
                    </Col>
                </Row> */}
                </Container>
            </header>
            <main>
                <div className="info w-100 min-vh-100">
                    <Container>
                        <Row className="header-box d-flex align-items-center info-text">
                                        <Col >
                                        <h1>Informasi Untuk Kamu</h1>
                                        <ul>
                                            <li>Sementara iklim Bumi telah berubah sepanjang sejarahnya, pemanasan saat ini terjadi pada tingkat yang tidak terlihat dalam 10.000 tahun terakhir</li><br />
                                            <li>Menurut Panel Antarpemerintah tentang Perubahan Iklim (IPCC), Sejak penilaian ilmiah sistematis dimulai pada tahun 1970-an, pengaruh aktivitas manusia terhadap pemanasan sistem iklim telah berkembang dari teori menjadi fakta yang mapan.</li><br />
                                            <li>
                                            Informasi ilmiah yang diambil dari sumber alami (seperti inti es, bebatuan, dan lingkaran pohon) dan dari peralatan modern (seperti satelit dan instrumen) semuanya menunjukkan tanda-tanda perubahan iklim.
                                            </li><br />
                                            <li>
                                            Dari kenaikan suhu global hingga lapisan es yang mencair, banyak sekali bukti adanya planet yang menghangat.
                                            </li>
                                        </ul>
                                        </Col>
                                        <Col>
                                            <img src={Warming} alt="Global Warming" className='image' width="100%"/>
                                        </Col>
                        </Row>
                    </Container>
                </div>

                <div className='artikel_waste'>
                        <Container>
                                <Row className="header-box d-flex align-items-center">
                                        <Col>
                                        <img src={Earth} alt="Selamatkan Bumi" width="100%"  className='image'/>
                                        </Col>
                                        <Col>
                                        <h1>Yuk, Saatnya Selamatkan Bumi Mulai Dari Hal Sederhana</h1>
                                        <p>
                                        Ayo kita mulai dari hal kecil, seperti mengelola sampah dengan gaya anak muda. Jadikan kita generasi yang peduli dengan lingkungan dan menyelamatkan bumi kita. Kita bisa berkreasi dengan sampah, seperti mengubah botol bekas menjadi pot bunga, atau mendaur ulang kertas menjadi karya seni. Setiap langkah kecil kita dalam mengelola sampah bisa membuat perbedaan besar. Jadi, mari kita bersama-sama menjaga bumi dengan gaya anak muda yang kreatif dan bertanggung jawab!
                                        </p>
                                        </Col>
                                </Row>
                        </Container>
                </div>

                <div className="green w-1 mt-4 mb-4">
                <Container>  
                    <Row className="header-box d-flex align-items-center">
                        <Col>
                            <h1>Tahukah Kamu?</h1>
                            <p>Tumpukan limbah dan sampah yang tidak terkelola dengan baik mencemari lingkungan. Limbah plastik menjadi salah satu masalah serius karena sulit terurai dan mengakibatkan kerusakan pada ekosistem laut. Limbah kimia juga dapat mencemari tanah dan sumber air, merusak kehidupan mikroorganisme dan mengancam kesehatan manusia</p>
                        </Col>
                        <Col className='hero-title text-end'>
                            <img src={Hero} alt="" width='100%' />
                        </Col>
                        <Col >
                            <h1>Save</h1>
                            <h1>The</h1>
                            <h1>Word</h1>
                            <p>Coba deh kurangi penggunaan barang sekali pakai yang berlebihan, kayak plastik, botol air, atau kemasan makanan. Alih-alih membuangnya, kita bisa lho mendaur ulang limbah seperti kertas, plastik, logam, atau kaca. Ayo, jadiin daur ulang sebagai gaya hidup yang keren!</p>
                        </Col>
                    </Row>
                </Container>
                </div>

                <Container className='artikel-title'>
                    <Row>
                        <Col>
                        <h2>Artikel Unggulan <br /> Green Health</h2>
                        </Col>
                        <Col>
                        <p>Ketahui lebih banyak tentang Gaya Hidup Sehat Ramah Lingkungan melalui artikel-artikel terbaik yang telah kami sediakan untuk kalian.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className='mt-4 mb-4'>
                    <Row className='artikel-item home'>
                    {artikel.map((artikel_) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <Col key={artikel_.id}>
                            <Card>
                                <Card.Img variant="top" src={artikel_.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{artikel_.title}</Card.Title>
                                    <Card.Text>
                                        {artikel_.des}
                                    </Card.Text>
                                    <Button variant="light" href={artikel_.link}>Selengkapnya</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                    </Row>
                </Container>



            </main>
        </div>
    )
}

export default HomePage;