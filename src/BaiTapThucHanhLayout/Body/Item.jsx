import React from 'react'

export default function Item() {
    return (
        <div className='container item'>
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card">
                    <i class="fal fa-camera-polaroid"></i>
                        <div class="card-body">
                            <h5 class="card-title">Fresh new layout</h5>
                            <p class="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                    <i class="fal fa-piano"></i>
                        <div class="card-body">
                            <h5 class="card-title">Free to download</h5>
                            <p class="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                    <i class="fal fa-piano"></i>
                        <div class="card-body">
                            <h5 class="card-title">Jumbotron hero header</h5>
                            <p class="card-text">The heroic part of this template  dependencies up to is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card">
                        <i class="bi bi-calendar2-heart"></i>
                        <div class="card-body">
                            <h5 class="card-title">Feature boxes</h5>
                            <p class="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        <i class="bi bi-calendar2-heart"></i>
                        <div class="card-body">
                            <h5 class="card-title">Simple clean code</h5>
                            <p class="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
                        <i class="bi bi-calendar2-heart"></i>
                        <div class="card-body">
                            <h5 class="card-title">A name you trust</h5>
                            <p class="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
