import React from 'react';

/**
 * Article Thread preloader
 * @returns (object) loader screen
 */
export default function ArticlePreloader() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-2" />
          <div className="column">
            <div className="article--image loading" />

            <div className="article--author__details">
              <div className="justify-content__start">
                <div className="article--author__details-name">
                  <span />
                </div>
              </div>
            </div>

          </div>
          <div className="column is-2" />
        </div>
        <div className="columns comments">
          <div className="column is-2" />
          <div className="column">
            <button
              className="button is-light is-medium is-fullwidth loading"
            />
          </div>
          <div className="column is-2" />
        </div>
      </div>
    </section>
  );
}
