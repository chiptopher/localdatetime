/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SEO from './seo';

import './layout.scss';

export const Layout = (props: LayoutProps) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div className="layout">
                <SEO title="" />
                <main className={props.className}>{props.children}</main>
                <footer>
                    <a
                        href="https://github.com/chiptopher/localdatetime"
                        target="_blank"
                    >
                        <span>Source for this Page</span>
                    </a>
                </footer>
            </div>
        )}
    />
);

interface LayoutProps {
    children: any;
    className?: string;
}
