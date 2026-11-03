// Sent to the backend for processing.
export interface ContactInfo {
    name: string;
    business: string;
    phone: string;
    email: string;
    service: string;
    message: string;
}

export interface ServiceOption {
    value: string;
    label: string;
}

export const serviceOptions: ServiceOption[] = [
    { value: 'smb_sec', label: 'Cybersecurity' },
    { value: 'web_dev', label: 'Website Development' },
    { value: 'pc_it', label: 'Computer Services' },
];

export type SubmitStatus = 'sent' | 'rate-limited' | 'invalid' | 'rejected' | 'server-error';

// Empty means same origin (/api/send-email on this domain).
// Set PUBLIC_API_BASE_URL in .env if the API lives on another domain.
const API_BASE: string = import.meta.env.PUBLIC_API_BASE_URL ?? '';

export async function sendContact(info: ContactInfo): Promise<SubmitStatus> {
    let response: Response;
    try {
        response = await fetch(`${API_BASE}/api/send-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info),
            signal: AbortSignal.timeout(15000),
        });
    } catch {
        // Network failure, timeout, CORS, etc. No response at all.
        return 'server-error';
    }

    if (response.ok) return 'sent';
    if (response.status === 429) return 'rate-limited';
    if (response.status === 400) return 'invalid';
    if (response.status >= 500) return 'server-error';
    return 'rejected';
}