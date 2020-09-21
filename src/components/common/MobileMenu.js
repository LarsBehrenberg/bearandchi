import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'

const MobileMenu = ({ data }) => (
    <Menu
        pageWrapId={'childWrapper'}
        outerContainerId={'gatsby-focus-wrapper'}
        right
        disableAutoFocus
        id="some-id"
    >
        <h1>Bear &amp; Chi</h1>
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return (
                    <a
                        className="site-nav-item"
                        href={navItem.url}
                        key={i}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {navItem.label}
                    </a>
                )
            } else {
                return (
                    <Link className="site-nav-item" to={navItem.url} key={i}>
                        {navItem.label}
                    </Link>
                )
            }
        })}
        <Link className="site-nav-button" to="/about">
            About
        </Link>
        <div className="bm-social-media-links">
            <a
                href="https://instagram.com/bearandchiii"
                className="site-nav-item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="site-nav-icon"
                    src="/images/icons/instagram.svg"
                    alt="Instagram"
                />
            </a>
            <a
                href="https://twitter.com/bearandchi"
                className="site-nav-item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="site-nav-icon"
                    src="/images/icons/twitter.svg"
                    alt="Twitter"
                />
            </a>
            <a
                className="site-nav-item"
                href={`https://feedly.com/i/subscription/feed/https://bearandgirl.com/rss/`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="site-nav-icon"
                    src="/images/icons/rss.svg"
                    alt="RSS Feed"
                />
            </a>
        </div>
    </Menu>
)

export default MobileMenu
