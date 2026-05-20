import { Home, ArrowLeft } from "lucide-react";

export const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md w-full">

                {/* Big Number */}
                <h1 className="text-7xl md:text-8xl font-bold text-primary">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-muted-foreground mt-3 leading-relaxed">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

                    <a
                        href="/"
                        className="cosmic-button flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>
            </div>
        </section>
    );
};