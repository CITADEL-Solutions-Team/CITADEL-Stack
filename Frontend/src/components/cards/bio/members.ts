// src/components/cards/bio/members.ts
export type Team = 'CS' | 'DEV' | 'SEC' | 'IT';

export const teamColors: Record<Team, string> = {
    CS: '#FFFB00',
    DEV: '#1E90FF',
    SEC: '#FF1E1E',
    IT: '#A227F3',
};

export interface Bio {
    Name: string;
    Team: Team;
    Role: string;
    Color: string;
    slug: string;
    To: string;
    Rare: boolean;
}

function bio(Name: string, Team: Team, Role: string, slug: string, Rare: boolean = false): Bio {
    return { Name, Team, Role, Color: teamColors[Team], slug, To: `/about-us/${slug}`, Rare };
}

export const bios: Bio[] = [
    bio('Tanis Georgi', 'CS', 'CEO', 'tgeorgi', true),
    bio('Dylan Clark', 'CS', 'President', 'dclark', true),
    bio('Nick Rudigier', 'DEV', 'Backend Lead', 'nrudigier'),
    bio('Ben Palotai', 'DEV', 'Web Designer', 'bpalotai'),
    bio('Lune Guevara', 'DEV', 'Web Designer', 'lguevara'),
    bio('Rich Kim', 'DEV', 'Frontend Dev', 'rkim'),
    bio("Tommy O'Donnell", 'SEC', 'Cybersecurity team', 'todonnell'),
    bio('Ian Shwartz', 'IT', 'Technician', 'ishwartz'),
];