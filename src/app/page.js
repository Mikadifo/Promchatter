import Banner from '@/components/banner';
import Navbar from '@/components/navbar';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Banner />
            <footer>
                <Banner isFooter={true} />
            </footer>
        </main>
    );
}
