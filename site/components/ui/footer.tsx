import Contato from "./contato";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <div className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <Contato />
          </div>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
