import Link from 'next/link';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { Container } from './Container';
import { OrangeStripe } from './OrangeStripe';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <OrangeStripe />
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-display uppercase text-2xl leading-none">
              R&amp;R <span className="text-orange">Land Management</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-xs">{site.tagline}</p>
            <p className="mt-6 text-xs uppercase tracking-widewide text-gray-300">
              {site.credentials.join(' • ')}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widewide text-orange mb-4">Site</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li><Link href="/" className="hover:text-orange transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-orange transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-orange transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-orange transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-widewide text-orange mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-orange transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-widewide text-orange mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-100">
              <li>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Ryan Troxel</div>
                <a href={`tel:${site.contact.primary.tel}`} className="hover:text-orange transition-colors">
                  {site.contact.primary.phone}
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Ronnie King</div>
                <a href={`tel:${site.contact.secondary.tel}`} className="hover:text-orange transition-colors">
                  {site.contact.secondary.phone}
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Email</div>
                <a href={`mailto:${site.contact.email}`} className="hover:text-orange transition-colors break-all">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Based In</div>
                <span>{site.address.city}, {site.address.region}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-900">
        <Container className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-300">
          <div>
            © {new Date().getFullYear()} {site.name}. {site.credentials.join(', ')}.
          </div>
          <div className="text-gray-300">
            Serving Sevier, Knox &amp; surrounding East TN counties.
          </div>
        </Container>
      </div>
    </footer>
  );
}
