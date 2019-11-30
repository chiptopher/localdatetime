/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './layout.scss';
import SEO from './seo';

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
            </div>
        )}
    />
);

interface LayoutProps {
    children: any;
    className?: string;
}
