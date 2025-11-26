import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GithubStats = ({ fadeInUp, darkMode }) => {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(false);
    const username = 'abhishelke1';

    useEffect(() => {
        // Fetch GitHub stats data to ensure it loads
        const checkGitHubAPI = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setStats(data);
                }
            } catch (err) {
                console.log('GitHub API check:', err);
                setError(true);
            }
        };

        checkGitHubAPI();
    }, []);

    return (
        <motion.section
            id="github-stats"
            className="github-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <h2 className="section-title">GitHub Contributions</h2>
            <div className="github-container">
                <div className="github-graph">
                    <img
                        src={`https://ghchart.rshah.org/${darkMode ? '3b82f6' : '2563eb'}/${username}`}
                        alt="Abhishek's Github Chart"
                        style={{ width: '100%', maxWidth: '800px' }}
                        loading="lazy"
                    />
                </div>
                <div className="github-stats-cards">
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${darkMode ? 'tokyonight' : 'default'}&hide_border=true&bg_color=00000000&count_private=true&include_all_commits=true`}
                            alt="Github Stats"
                            loading="lazy"
                            onError={(e) => {
                                // Fallback if image fails to load
                                e.target.style.display = 'none';
                            }}
                        />
                    </a>
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${darkMode ? 'tokyonight' : 'default'}&hide_border=true&bg_color=00000000&langs_count=6`}
                            alt="Top Languages"
                            loading="lazy"
                            onError={(e) => {
                                // Fallback if image fails to load
                                e.target.style.display = 'none';
                            }}
                        />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default GithubStats;
