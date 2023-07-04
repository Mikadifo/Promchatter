import Banner from '@/components/banner';

export default function Home() {
    return (
        <main>
            <Banner />
            <footer>
                <Banner isFooter={true} />
            </footer>
        </main>
    );
}
