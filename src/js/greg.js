const mem = document.getElementById("mem");

class GitHubRepo {
    constructor(name, firstMade, madePublic) {
        this.name = name;
        this.firstMade = firstMade;
        this.madePublic = madePublic;
    }
}

function Repos() {
    const GitHubRepos = [
        new GitHubRepo("greg", "Dec 19, 2024", "Feb 13, 2025"),
        new GitHubRepo("freakybob", "Dec 4, 2024", "Feb 13, 2025"),
        new GitHubRepo("Christmas-update", "Oct 21, 2024", "Feb 13, 2025"),
        new GitHubRepo("archive", "Nov 10, 2024", "Feb 13, 2025"),
        new GitHubRepo("freakysfx", "Nov 14, 2024", "Feb 13, 2025")
    ];

    if (mem) {
        let table = "<table border='1'><tr><th>Repository</th><th>First Made</th><th>Made Public</th></tr>";
        
        GitHubRepos.forEach(repo => {
            table += `<tr>
                        <td>${repo.name}</td>
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

function main() {
    Repos();
}

main();
