import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t w-full">
      <div className=" py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="px-4">
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-rethink)]">About</h3>
            <p className="text-sm text-muted-foreground font-[family-name:var(--font-rethink)]">
              Century is a comprehensive school management system designed to
              streamline educational operations.
            </p>
          </div>
          <div className="px-4">
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-rethink)]">Quick Links</h3>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-rethink)]">
              <li>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground font-[family-name:var(--font-rethink)]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground font-[family-name:var(--font-rethink)]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground font-[family-name:var(--font-rethink)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 font-[family-name:var(--font-rethink)]">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 font-[family-name:var(--font-rethink)]">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: info@century.com</li>
              <li className="text-muted-foreground">Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground font-[family-name:var(--font-rethink)]">
          <p>&copy; {new Date().getFullYear()} Century. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
