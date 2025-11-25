import React from 'react';
import { motion } from 'framer-motion';

const GithubStats = ({ fadeInUp, darkMode }) => {
    return (
        <motion.section
            id="github-stats"
            className="github-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <h2 className="section-title">Github Contributions</h2>
            <div className="github-container">
                <div className="github-graph">
                    <img
                        src={`https://ghchart.rshah.org/${darkMode ? '3b82f6' : '2563eb'}/abhishelke1`}
                        alt="Abhishek's Github Chart"
                        style={{ width: '100%', maxWidth: '800px' }}
                    />
                </div>
                <div className="github-stats-cards">
                    <a href="https://github.com/abhishelke1">
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=abhishelke1&show_icons=true&theme=${darkMode ? 'tokyonight' : 'default'}&hide_border=true&bg_color=00000000`}
                            alt="Github Stats"
                        />
                    </a>
                    <a href="https://github.com/abhishelke1">
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=abhishelke1&layout=compact&theme=${darkMode ? 'tokyonight' : 'default'}&hide_border=true&bg_color=00000000`}
                            alt="Top Languages"
                        />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default GithubStats;
