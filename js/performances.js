let performances = `
<h1>Performances</h1>

<style>
    .center {
        text-align: center;
    }

    .upcoming img {
        max-width: 75%;
        padding: 1em;
        border-radius: 5%;
    }

    .gigs ul {
        list-style-type: style circle;
        padding-left: 5%;
    }

    .fliers {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    .fliers li {
        list-style-type: none;
    }

    .fliers > li {
        flex-basis: 200px;
    }

    .fliers li img {
        object-fit: cover;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        border-radius: 5%;
    }

    .fliers::after {  
        content: "";
        flex-basis: 350px;
    }
</style>

<div class="gigs">
    <div class="upcoming">
        <ul>
            <li>3/11/2024 - Jazz Academy Jam Session Celebrating Women in Jazz @ Jazz Arts Group</i>
            <li>3/16/2024 (Morning) - PBJ & Jazz concert series by <a href="https://www.jazzartsgroup.org/pbj-jazz/" target="_blank">Jazz Arts Group</a></li> 
            <li>3/16/2024 (Evening) - She Sings: Celebrating Women in Jazz @ Natalie's Grandview</li>
            <li>3/25/2024 - Collaboration w/ VIOLEER for S.T.A.T.I.C 12 @ Dirty Dungarees</li>
            <li>3/28/2024 - Gault @ Dick's Den</li>
            <li>3/29/2024 - Null Copula @ DSGN CLLCTV (Cincinnati) w/ Jacob Winans, $5000, Final Machine</li>
            <li>4/4/2024 - Turtle Boat "Fear is Heavy, I've Got Plans ..." release @ Long Street Studio for Jazz Arts Group Community Jazz Series</li>
            <li>4/5/2024 - Turtle Boat "Fear is Heavy, I've Got Plans ..." release @ Dirty Dungarees w/ MOLOTOV TRIO</li>
            <li>4/22/2024 - Gault @ Dirty Dungarees w/ Gían Pérez</li>
            <li>4/24/2024 - Null Copula @ Dirty Dungarees w/ BLADING, MORAL FAILING, HXXXRVESTER, sobbing.</li>
            <li>6/1/2024 - Gault @ Dick's Den</li>
            <li>6/15/2024 - Nebraska Noisefest</li>
        </ul>
    </div>
</div>

<div class="gigs">    
    <div class="flier-container">
        <ul class="fliers">
            <li><img src="/img/fliers/2024/2024-04-24.png" loading="lazy"></li>
            <li><img src="/img/fliers/2024/2024-04-05.png" loading="lazy"></li>
            <li><img src="/img/fliers/2024/2024-04-04.png" loading="lazy"></li>
            <li><img src="/img/fliers/2024/2024-03-29.jpeg" loading="lazy"></li>
            <li><img src="/img/fliers/2024/2024-02-26.jpg" loading="lazy"></li>
            <li><img src="/img/fliers/2024/2024-02-01.jpeg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-12-18.jpg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-11-30.JPG" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-11-17.jpg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-11-16.jpg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-11-15.jpg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-11-acia-tour.jpg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-11-acia2.JPG" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-09-27.jpeg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-09-07-Arritola.jpeg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-09-01-Galaxxu.jpeg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-07-16.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-07-11.jpeg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-07-01.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-05-06.png" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-04-01.png" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-03-04.jpeg" loading="lazy"></li>
            <li><img src="/img/fliers/2023/2023-01-23.JPG" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2022-11-26.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2022-11-20.jpg" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2022-11-19.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2022-10-22.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2021-08-14.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2020-10.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2019-11-05.JPEG" loading="lazy"></li>
            <li><img src="/img/fliers/pre-2023/2018-11-12.jpeg" loading="lazy"></li>
        </ul>
    </div>

    <ul>
        <li>2/26/2024 - Collaboration w/ Drew Sherrick & dvvidw for S.T.A.T.I.C 11 @ Dirty Dungarees</li>
        <li>2/1/2024 - Gault @ Dick's Den</li>
        <li>12/18/2023 - Null Copula + Fatal Gaze @ Dirty Dungarees for S.T.A.T.I.C w/ DVVIDW, Karl Vorndran (Akron, OH), Violeer, Eve Lenker + Esther Brodess</li>
        <li>11/30/2023 - Gault @ Dick's Den</li>
        <li>11/17/2023 - Abhi C. & Ishmael Ali Duo @ Pittsburgh Sound Preserve (PGH) w/ Farrah Faucet, Eli Namay</li>
        <li>11/16/2023 - Abhi C. & Ishmael Ali Duo @ Dirty Dungarees w/ Outdoor Horse Shrine, Blading, Jeanne Le Feu</li>
        <li>11/15/2023 - Abhi C. & Ishmael Ali Duo @ DSGN CLLCTV (Cincinnati, OH) w/ Exclusion Zone, Material Body Dysfunction, OhrStreicheln</li>
        <li>10/21/2023 - Null Copula @ Cultural Arts Center (Fuse Factory) w/ Jaap Blonk & TBA</li>
        <li>10/14/2023 - Null Copula @ Babaluma (1381 Genessee) w/ Alex C, VEND</li>
        <li>9/28/2023 - Duo w/ Rachel Azbell @ Grandview Heights Public Library 6:30 - 7:30 PM</li>
        <li>9/27/2023 - Null Copula @ Dirty Dungarees w/ sobbing., Tusk, Harvester</li>
        <li>9/7/2023 - Turtle Boat @ Dirty Dungarees w/ Adam Arritola, Troy Kunkler </li>
        <li>9/1/2023 - Turtle Boat @ <a
                href="https://thefusefactory.org/event/performance-galaxxu-into-the-parhelion-of-imagined-truths-turtle-boat-mimete/"
                target="_blank">Fuse Factory</a> / Cultural Arts Center (139 W. Main st) w/ Galaxxu Into the Parhelion
            of Imagined Truths, Mimete</a></li>
        <li>8/26/2023 - Ensemble w/ Alex Burgoyne, Eli Chambers, Krista Faist @ <a
                href="https://thefusefactory.org/event/performance-danny-kamins-jamison-williams-krista-faist-alex-burgoyne/"
                target="_blank">Fuse Factory</a></li>
        <li>8/17/2023 - Gault @ Land Grant</li>
        <li>8/7/2023 - Null Copula @ Dirty Dungarees | S.T.A.T.I.C. Vol. 5 w/ Heldig, Troy Kunkler, Doug Leed, David
            Reed, Reek (Seattle)</li>
        <li>7/16/2023 - Null Copula @ DSGN CLLCTV (Cincinnati) w/ Outdoor Horse Shrine, KBD, 10 Ton Fog</li>
        <li>7/11/2023 - Null Copula @ Dirty Dungarees w/ DEMON LIFE, Leslie Keffer / Rodger Stella, Tim Gick, VIOLEER
        </li>
        <li>7/1/2023 - Gault @ Dick's Den</li>
        <li>5/27/23 - Gault @ Columbus Performing Arts Center | Fuse Factory artist residency: Caleb Miller</li>
        <li>5/18/23 - Gault @ Dick's Den</li>
        <li>5/6/23 - Turtle Boat @ Dick's Den</li>
        <li>4/1/23 - Turtle Boat @ Dirty Dungarees w/ BAND, Mimete</li>
        <li>3/4/23 - Null Copula @ Skeleton Dust Records w/ BEING, SLACKING, PAIN APPENDIX</li>
        <li>1/21/23 - Null Copula @ Dirty Dungarees w/ mASScOMM, Fatal Gaze, TUSK</li>
    </ul>
</div>
`;
