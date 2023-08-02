import Banner from '@/components/banner';
import PromptCard from '@/components/promptCard';

export default function Home() {
    return (
        <main>
            <Banner />
            <PromptCard></PromptCard>
            <footer>
                <Banner isFooter={true} />
            </footer>
        </main>
    );
}
