import { ReactNode } from "react";
import { Link } from "react-router-dom";
import mooviLogo from "@/assets/moovi-logo.png";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={mooviLogo} alt="Moovi.chat" className="h-10 sm:h-12" />
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </Link>
            <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
              Termos
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12 sm:py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <header className="mb-10 pb-6 border-b border-border">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Última atualização: {lastUpdated}
            </p>
          </header>

          <div className="legal-content text-foreground/90 leading-relaxed space-y-6 text-[17px]">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPageLayout;