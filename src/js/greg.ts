const mem = document.getElementById("mem") as HTMLElement | null;

class GitHubRepo {
    name: string;
    url: string;
    firstMade: string;
    madePublic: string;

    constructor(name: string, url: string, firstMade: string, madePublic: string) {
        this.name = name;
        this.url = url;
        this.firstMade = firstMade;
        this.madePublic = madePublic;
    }
}

function Repos(): void {
    const GitHubRepos: GitHubRepo[] = [
        new GitHubRepo("greg", "https://github.com/freakybob-team/greg", "Dec 19, 2024", "Feb 13, 2025"),
        new GitHubRepo("freakybob", "https://github.com/freakybob-team/freakybob", "Dec 4, 2024", "Feb 13, 2025"),
        new GitHubRepo("Christmas-update", "https://github.com/freakybob-team/Christmas-update", "Oct 21, 2024", "Feb 13, 2025"),
        new GitHubRepo("archive", "https://github.com/freakybob-team/archive", "Nov 10, 2024", "Feb 13, 2025"),
        new GitHubRepo("freakysfx", "https://github.com/freakybob-team/freakysfx", "Nov 14, 2024", "Feb 13, 2025")
    ];

    if (mem) {
        let table: string = "<table border='1'><tr><th>Repository</th><th>First Made</th><th>Made Public</th></tr>";
        
        GitHubRepos.forEach(repo => {
            table += `<tr>
                        <td><a href="${repo.url}" target="_blank">${repo.name}</a></td>
                        <td>${repo.firstMade}</td>
                        <td>${repo.madePublic}</td>
                      </tr>`;
        });

        table += "</table>";
        mem.innerHTML = table;
    } else {
        console.error("Error: Element 'mem' not found");
    }
}

function main(): void {
    Repos();
}

main();
