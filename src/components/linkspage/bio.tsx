export function isDomainName(s: string): boolean {
    // Define a regular expression pattern for a simple domain name
    const pattern: RegExp = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Use test method to check if the string matches the pattern
    return pattern.test(s);
}

export function createDomainLink(s: string, color: string): JSX.Element {
    // Define a regular expression pattern for a valid domain name
    const domainPattern: RegExp = /([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    // Use replace method to replace the domain with an HTML hyperlink
    const result = s.replace(domainPattern, (match, domain) => {
        if (isDomainName(domain)) {
            return `<a class="underline" href="http://${domain}" target="_blank">${domain}</a>`;
        } else {
            return match; // Return the original match if it's not a valid domain
        }
    });

    return <p className="pb-4 max-w-xl text-center" style={{ color: color }} dangerouslySetInnerHTML={{ __html: result }} />;
}

interface Props {
    bio: string
    color: string;
}
const BioCheck: React.FC<Props> = ({ bio, color }) => {
    return createDomainLink(bio, color)
}

export default BioCheck;