        // Main customization entrypoint for this template.
        const siteConfig = {
            brand: {
                mark: "PRJ",
                title: "Project Backbone",
                subtitle: "A reusable single-page research website scaffold inspired by the MAGNet project layout."
            },
            hero: {
                badge: "Research Project Website Template",
                title: "Your Project Title Goes Here",
                tagline: "Use this area for the one-sentence explanation that tells visitors what your project does and why it matters.",
                authors: [
                    { name: "Author One", url: "#", markers: ["*"] },
                    { name: "Author Two", url: "#", markers: ["*", "1"] },
                    { name: "Author Three", url: "#", markers: ["2"] },
                    { name: "Author Four", url: "#", markers: ["1"] }
                ],
                affiliations: [
                    { label: "Institution One", markers: ["1"] },
                    { label: "Institution Two", markers: ["2"] }
                ],
                contributionNote: "* Equal contribution",
                links: {
                    paper: "#",
                    code: "#"
                },
                stats: [
                    { value: "01", label: "Replace with your key benchmark or result" },
                    { value: "02", label: "Replace with your headline capability" },
                    { value: "03", label: "Replace with your deployment or scale metric" }
                ],
                cardLabel: "Project snapshot",
                cardCopy: "Replace this panel with a diagram, cover image, or branding mark once your assets are ready."
            },
            teaser: {
                description: "A strong teaser makes the rest of the page easier to scan. Swap in a hosted mp4, a YouTube embed, or a hero image.",
                video: "",
                iframe: "",
                image: "",
                poster: ""
            },
            abstract: [
                "Use this backbone to tell a clear story about your project: the problem, what makes your method different, and the most important outcomes. The original MAGNet page succeeds because it organizes a dense technical story into sections that are easy to browse.",
                "This template keeps that same rhythm while removing the hard-coded content. You can fill in your own project summary, media, benchmarks, and diagrams without having to rebuild the site structure from scratch."
            ],
            highlights: [
                "Replace this highlight with your main contribution.",
                "Use the second highlight for a standout capability or benchmark result.",
                "Use the third highlight for scale, robustness, or deployment context."
            ],
            capabilities: [
                {
                    title: "Capability One",
                    chip: "Prediction",
                    description: "Describe the first mode of your model or system. This card is meant to feel like the MAGNet capability panels, but it is generic enough for any project.",
                    samples: [
                        { label: "Sample A", note: "Swap in a video, gif, or poster image.", video: "", image: "" },
                        { label: "Sample B", note: "Add a short caption for what the viewer should notice.", video: "", image: "" },
                        { label: "Sample C", note: "You can point each sample to different hosted assets.", video: "", image: "" }
                    ]
                },
                {
                    title: "Capability Two",
                    chip: "Generation",
                    description: "Use this second card for a different task setting, a new dataset, or a more interactive application scenario.",
                    samples: [
                        { label: "Variant A", note: "Keep the sample strip if you want multiple examples.", video: "", image: "" },
                        { label: "Variant B", note: "Or remove extra items and keep one hero panel.", video: "", image: "" },
                        { label: "Variant C", note: "The layout still holds up with text-only placeholders.", video: "", image: "" }
                    ]
                },
                {
                    title: "Capability Three",
                    chip: "Control",
                    description: "This is a good place for editing, conditioning, planning, or long-context abilities if that is central to your work.",
                    samples: [
                        { label: "Control 1", note: "Use the active sample area for your strongest qualitative example.", video: "", image: "" },
                        { label: "Control 2", note: "The other samples can act like a gallery of supporting cases.", video: "", image: "" }
                    ]
                }
            ],
            method: [
                {
                    step: "Step 01",
                    title: "Input Representation",
                    copy: "Summarize the data or prompt format your system expects. Add one or two lines on preprocessing, tokenization, or scene formatting.",
                    tokens: ["input", "prompt", "scene", "state"]
                },
                {
                    step: "Step 02",
                    title: "Core Model",
                    copy: "Describe your backbone model, the key architectural choice, or the training objective that most differentiates your system.",
                    tokens: ["encoder", "transformer", "diffusion", "policy"]
                },
                {
                    step: "Step 03",
                    title: "Conditioning Logic",
                    copy: "Use this card for memory, retrieval, conditioning signals, interaction modules, or any control structure that matters.",
                    tokens: ["context", "memory", "retrieval", "constraints"]
                },
                {
                    step: "Step 04",
                    title: "Outputs",
                    copy: "Close the pipeline with predictions, generations, actions, trajectories, or another outcome layer users can understand quickly.",
                    tokens: ["output", "metrics", "render", "deploy"]
                }
            ],
            scheduleModes: [
                {
                    label: "Joint Forecasting",
                    description: "All future steps are denoised together, which helps show coordinated behavior across the full horizon.",
                    formula: "p(x[t:T] | x[0:t-1], c)",
                    cleanPattern: [4, 5, 6, 7, 8, 9, 10, 11]
                },
                {
                    label: "Inpainting",
                    description: "Only the missing span is denoised while observed context remains fixed on both sides.",
                    formula: "p(x[missing] | x[left], x[right], c)",
                    cleanPattern: [5, 6, 7, 8]
                },
                {
                    label: "Agentic",
                    description: "One step becomes clean at a time, which is useful for reactive or sequential decision settings.",
                    formula: "p(x[t] | x[0:t-1], a[t-1], c)",
                    cleanPattern: [4, 5, 6, 7, 8, 9]
                }
            ],
            comparisons: [
                {
                    title: "Baseline A vs Your Method",
                    description: "Use this slot for the most important side-by-side comparison on your page.",
                    leftLabel: "Baseline",
                    rightLabel: "Ours",
                    leftMedia: { video: "", image: "", caption: "Replace with baseline media." },
                    rightMedia: { video: "", image: "", caption: "Replace with your method media." }
                },
                {
                    title: "Ablation vs Full Model",
                    description: "A second comparison can show why a modeling choice matters or how qualitative behavior changes.",
                    leftLabel: "Ablation",
                    rightLabel: "Full Model",
                    leftMedia: { video: "", image: "", caption: "Swap in ablation results." },
                    rightMedia: { video: "", image: "", caption: "Swap in final model results." }
                }
            ],
            resultSection: {
                title: "Long-Horizon Results",
                copy: "Use the final section to showcase the output that best sells your project: ultra-long sequences, realistic rollouts, a deployed system, or a polished demo. This is where visitors should leave with a concrete feeling for what your project can do.",
                video: "",
                image: "",
                metrics: [
                    { title: "Duration", copy: "Highlight how long your method remains stable, useful, or realistic." },
                    { title: "Consistency", copy: "Call out what remains coherent over time or across interacting entities." },
                    { title: "Takeaway", copy: "End with the one sentence you want people to remember." }
                ]
            }
        };

        const state = {
            capabilityIndex: new Map(),
            scheduleModeIndex: 0,
            frame: 0,
            playing: true,
            timer: null,
            speed: 3
        };

        const scheduleRows = [
            { label: "Agent A" },
            { label: "Agent B" },
            { label: "Context" }
        ];

        const iconRegistry = {
            atom: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                    <ellipse cx="12" cy="12" rx="9" ry="4.2"></ellipse>
                    <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(60 12 12)"></ellipse>
                    <ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(120 12 12)"></ellipse>
                    <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"></circle>
                </svg>
            `,
            overview: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="4" width="7" height="7" rx="2"></rect>
                    <rect x="13" y="4" width="7" height="4" rx="2"></rect>
                    <rect x="13" y="10" width="7" height="10" rx="2"></rect>
                    <rect x="4" y="13" width="7" height="7" rx="2"></rect>
                </svg>
            `,
            teaser: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3.5" y="5" width="17" height="14" rx="3"></rect>
                    <path d="M10 9.2L15 12L10 14.8V9.2Z" fill="currentColor" stroke="none"></path>
                </svg>
            `,
            abstract: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 6.5H18"></path>
                    <path d="M7 11.5H18"></path>
                    <path d="M7 16.5H15"></path>
                    <circle cx="4.5" cy="6.5" r="1"></circle>
                    <circle cx="4.5" cy="11.5" r="1"></circle>
                    <circle cx="4.5" cy="16.5" r="1"></circle>
                </svg>
            `,
            capabilities: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 16L10 12L13 14L18 8"></path>
                    <path d="M15 8H18V11"></path>
                    <circle cx="6" cy="16" r="1.5"></circle>
                    <circle cx="10" cy="12" r="1.5"></circle>
                    <circle cx="13" cy="14" r="1.5"></circle>
                    <circle cx="18" cy="8" r="1.5"></circle>
                </svg>
            `,
            method: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3.5" y="5" width="5" height="5" rx="1.5"></rect>
                    <rect x="15.5" y="4" width="5" height="6" rx="1.5"></rect>
                    <rect x="15.5" y="14" width="5" height="6" rx="1.5"></rect>
                    <path d="M8.5 7.5H12.5C14.2 7.5 15.5 6.2 15.5 5"></path>
                    <path d="M8.5 7.5H12.5C14.2 7.5 15.5 8.8 15.5 10"></path>
                    <path d="M8.5 7.5H12.5C14.2 7.5 15.5 15.2 15.5 17"></path>
                </svg>
            `,
            schedule: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 18H20"></path>
                    <path d="M7 15V10"></path>
                    <path d="M12 15V6"></path>
                    <path d="M17 15V12"></path>
                    <circle cx="7" cy="9" r="1.4"></circle>
                    <circle cx="12" cy="5" r="1.4"></circle>
                    <circle cx="17" cy="11" r="1.4"></circle>
                </svg>
            `,
            comparisons: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3.5" y="5" width="7.5" height="14" rx="2"></rect>
                    <rect x="13" y="5" width="7.5" height="14" rx="2"></rect>
                    <path d="M7.3 9.5H7.4"></path>
                    <path d="M16.7 14.5H16.8"></path>
                </svg>
            `,
            results: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 18H20"></path>
                    <path d="M6 15L10 11L13 13L18 7"></path>
                    <path d="M15 7H18V10"></path>
                </svg>
            `,
            paper: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 3.5H14.8L19 7.7V19A1.5 1.5 0 0 1 17.5 20.5H8A1.5 1.5 0 0 1 6.5 19V5A1.5 1.5 0 0 1 8 3.5Z"></path>
                    <path d="M14 3.5V8H18.5"></path>
                    <path d="M9 12H16"></path>
                    <path d="M9 15.5H14"></path>
                </svg>
            `,
            code: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 8L5 12L9 16"></path>
                    <path d="M15 8L19 12L15 16"></path>
                    <path d="M13.5 5.5L10.5 18.5"></path>
                </svg>
            `,
            demo: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="8.5"></circle>
                    <path d="M10 8.8L15 12L10 15.2V8.8Z" fill="currentColor" stroke="none"></path>
                </svg>
            `,
            prediction: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 14C5.5 14 6.3 10 8 10C9.7 10 10.3 14 12 14C13.7 14 14.3 10 16 10C17.7 10 18.5 14 20 14"></path>
                    <path d="M4 18H20"></path>
                </svg>
            `,
            generation: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3.5L13.7 8.3L18.5 10L13.7 11.7L12 16.5L10.3 11.7L5.5 10L10.3 8.3L12 3.5Z"></path>
                    <path d="M18 15.5L18.7 17.3L20.5 18L18.7 18.7L18 20.5L17.3 18.7L15.5 18L17.3 17.3L18 15.5Z"></path>
                </svg>
            `,
            control: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 7H19"></path>
                    <path d="M5 17H19"></path>
                    <circle cx="9" cy="7" r="2"></circle>
                    <circle cx="15" cy="17" r="2"></circle>
                </svg>
            `,
            play: `
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M8 6.8V17.2L17 12L8 6.8Z"></path>
                </svg>
            `,
            pause: `
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <rect x="7" y="6.5" width="3.5" height="11" rx="1.2"></rect>
                    <rect x="13.5" y="6.5" width="3.5" height="11" rx="1.2"></rect>
                </svg>
            `,
            reset: `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 12A8 8 0 1 1 17.7 6.3"></path>
                    <path d="M20 4.5V9.5H15"></path>
                </svg>
            `
        };

        function iconMarkup(name, className) {
            const icon = iconRegistry[name] || iconRegistry.atom;
            return "<span class='" + (className || "ui-icon") + "' aria-hidden='true'>" + icon + "</span>";
        }

        function capabilityIconName(label) {
            const value = String(label || "").toLowerCase();
            if (value.includes("predict")) {
                return "prediction";
            }
            if (value.includes("generat")) {
                return "generation";
            }
            if (value.includes("control")) {
                return "control";
            }
            return "capabilities";
        }

        function escapeHtml(value) {
            return String(value)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/\"/g, "&quot;")
                .replace(/'/g, "&#39;");
        }

        function renderMarkedEntry(item, className) {
            if (typeof item === "string") {
                return "<span class='" + className + "'><span>" + escapeHtml(item) + "</span></span>";
            }

            const label = escapeHtml(item.name || item.label || "");
            const markersValue = Array.isArray(item.markers) ? item.markers.join("") : (item.markers || "");
            const markers = markersValue ? "<sup>" + escapeHtml(markersValue) + "</sup>" : "";
            const content = item.url
                ? "<a href='" + escapeHtml(item.url) + "' target='_blank' rel='noreferrer'>" + label + "</a>"
                : "<span>" + label + "</span>";

            return "<span class='" + className + "'>" + content + markers + "</span>";
        }

        function renderInlineMarkedList(items, className) {
            if (!Array.isArray(items)) {
                return escapeHtml(items || "");
            }

            return items.map((item) => renderMarkedEntry(item, className)).join("<span class='author-separator'>, </span>");
        }

        function setText(id, value) {
            document.getElementById(id).textContent = value;
        }

        function applyTheme(theme) {
            const root = document.documentElement;
            const metaTheme = document.querySelector('meta[name="theme-color"]');
            const toggle = document.getElementById("themeToggle");
            const label = document.getElementById("themeToggleLabel");
            const nextTheme = theme === "dark" ? "dark" : "light";

            root.dataset.theme = nextTheme;

            if (metaTheme) {
                metaTheme.setAttribute("content", nextTheme === "dark" ? "#182130" : "#5f96ea");
            }

            if (toggle) {
                toggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
            }

            if (label) {
                label.textContent = nextTheme === "dark" ? "Dark" : "Light";
            }

            try {
                localStorage.setItem("project-theme", nextTheme);
            } catch (error) {
                // Ignore storage errors in restricted environments.
            }
        }

        function initTheme() {
            let savedTheme = "light";

            try {
                const stored = localStorage.getItem("project-theme");
                if (stored === "light" || stored === "dark") {
                    savedTheme = stored;
                }
            } catch (error) {
                // Ignore storage errors in restricted environments.
            }

            applyTheme(savedTheme);

            const toggle = document.getElementById("themeToggle");
            if (!toggle) {
                return;
            }

            toggle.addEventListener("click", () => {
                const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
                applyTheme(current === "dark" ? "light" : "dark");
            });
        }

        function renderMedia(target, media, fallbackTitle, fallbackCopy) {
            target.innerHTML = "";
            if (media.video) {
                const video = document.createElement("video");
                video.src = media.video;
                video.controls = true;
                video.autoplay = false;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                if (media.poster) {
                    video.poster = media.poster;
                }
                target.appendChild(video);
                return;
            }
            if (media.iframe) {
                const iframe = document.createElement("iframe");
                iframe.src = media.iframe;
                iframe.title = fallbackTitle;
                iframe.loading = "lazy";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                target.appendChild(iframe);
                return;
            }
            if (media.image) {
                const image = document.createElement("img");
                image.src = media.image;
                image.alt = fallbackTitle;
                target.appendChild(image);
                return;
            }
            const placeholder = document.createElement("div");
            placeholder.className = target.id === "teaserMedia" ? "media-placeholder" : "placeholder-mini";
            placeholder.innerHTML = "<div><strong>" + fallbackTitle + "</strong><p>" + fallbackCopy + "</p><code>Drop a media URL into siteConfig</code></div>";
            target.appendChild(placeholder);
        }

        function initHero() {
            document.title = siteConfig.hero.title || "Research Project Backbone";
            document.getElementById("metaDescription").setAttribute(
                "content",
                siteConfig.hero.tagline || "Reusable research project website backbone."
            );
            const brandMark = document.getElementById("brandMark");
            brandMark.innerHTML = iconMarkup("atom", "ui-icon brand-mark-icon") + "<span class='brand-mark-text'></span>";
            brandMark.querySelector(".brand-mark-text").textContent = siteConfig.brand.mark;
            setText("brandTitle", siteConfig.brand.title);
            setText("brandSubtitle", siteConfig.brand.subtitle);
            setText("heroTitle", siteConfig.hero.title);
            setText("heroTagline", siteConfig.hero.tagline);
            document.getElementById("authorList").innerHTML = renderInlineMarkedList(siteConfig.hero.authors, "author-entry");
            document.getElementById("affiliationLine").innerHTML = renderInlineMarkedList(siteConfig.hero.affiliations, "affiliation-entry");
            const contributionNote = document.getElementById("contributionNote");
            const note = siteConfig.hero.contributionNote || "";
            contributionNote.hidden = !note;
            contributionNote.textContent = note;
            setText("heroCardLabel", siteConfig.hero.cardLabel);
            setText("heroCardCopy", siteConfig.hero.cardCopy);

            document.getElementById("paperButton").href = siteConfig.hero.links.paper || "#";
            document.getElementById("codeButton").href = siteConfig.hero.links.code || "#";

            [
                { id: "paperButton", icon: "paper" },
                { id: "codeButton", icon: "code" },
                { id: "demoButton", icon: "demo" }
            ].forEach((item) => {
                const link = document.getElementById(item.id);
                const label = link.textContent;
                link.innerHTML = iconMarkup(item.icon, "ui-icon button-icon") + "<span>" + label + "</span>";
            });

            const heroArt = document.querySelector(".hero-card-art");
            if (heroArt && !heroArt.querySelector(".hero-react-mark")) {
                heroArt.insertAdjacentHTML("afterbegin", `
                    <div class="hero-react-mark" aria-hidden="true">
                        <span class="hero-react-orbit orbit-a"></span>
                        <span class="hero-react-orbit orbit-b"></span>
                        <span class="hero-react-orbit orbit-c"></span>
                        <span class="hero-react-core"></span>
                    </div>
                `);
            }

            const stats = document.getElementById("heroStats");
            stats.innerHTML = "";
            siteConfig.hero.stats.forEach((item) => {
                const card = document.createElement("div");
                card.className = "stat";
                card.innerHTML = "<strong>" + item.value + "</strong><span>" + item.label + "</span>";
                stats.appendChild(card);
            });
        }

        function initTeaser() {
            renderMedia(
                document.getElementById("teaserMedia"),
                siteConfig.teaser,
                "Teaser media placeholder",
                "Add a teaser video, embedded demo, or key figure here."
            );
            setText("teaserCaption", siteConfig.teaser.description);
        }

        function initAbstract() {
            const abstractCopy = document.getElementById("abstractCopy");
            abstractCopy.innerHTML = siteConfig.abstract.map((paragraph) => "<p>" + paragraph + "</p>").join("");

            const highlightList = document.getElementById("highlightList");
            highlightList.innerHTML = "";
            siteConfig.highlights.forEach((item, index) => {
                const block = document.createElement("div");
                block.className = "highlight";
                block.innerHTML = "<div class='highlight-index'>" + String(index + 1).padStart(2, "0") + "</div><div>" + item + "</div>";
                highlightList.appendChild(block);
            });
        }

        function renderCapabilityStage(container, capability, activeIndex) {
            const sample = capability.samples[activeIndex];
            const stage = container.querySelector(".stage-media");
            stage.innerHTML = "";

            if (sample.video) {
                const video = document.createElement("video");
                video.src = sample.video;
                video.controls = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                stage.appendChild(video);
            } else if (sample.image) {
                const image = document.createElement("img");
                image.src = sample.image;
                image.alt = sample.label;
                stage.appendChild(image);
            } else {
                const placeholder = document.createElement("div");
                placeholder.className = "placeholder-mini";
                placeholder.innerHTML = "<div><strong>" + sample.label + "</strong><p>" + sample.note + "</p></div>";
                stage.appendChild(placeholder);
            }

            container.querySelectorAll(".sample-thumb").forEach((button, index) => {
                button.classList.toggle("active", index === activeIndex);
            });
        }

        function initCapabilities() {
            const grid = document.getElementById("capabilityGrid");
            grid.innerHTML = "";

            siteConfig.capabilities.forEach((capability, capabilityIndex) => {
                state.capabilityIndex.set(capabilityIndex, 0);

                const card = document.createElement("article");
                card.className = "capability-card";
                card.innerHTML = `
                    <div class="capability-head">
                        <div>
                            <h4>${capability.title}</h4>
                        </div>
                        <div class="capability-chip">${iconMarkup(capabilityIconName(capability.chip), "ui-icon capability-chip-icon")}<span>${capability.chip}</span></div>
                    </div>
                    <div class="capability-body">
                        <p class="capability-copy">${capability.description}</p>
                        <div class="gallery-stage">
                            <div class="stage-media"></div>
                            <div class="sample-strip">
                                <button class="strip-nav prev" type="button" aria-label="Previous sample">‹</button>
                                <div class="strip-track"></div>
                                <button class="strip-nav next" type="button" aria-label="Next sample">›</button>
                            </div>
                        </div>
                    </div>
                `;

                const track = card.querySelector(".strip-track");
                capability.samples.forEach((sample, sampleIndex) => {
                    const thumb = document.createElement("button");
                    thumb.className = "sample-thumb";
                    thumb.type = "button";
                    thumb.innerHTML = "<strong>" + sample.label + "</strong><span>" + sample.note + "</span>";
                    thumb.addEventListener("click", () => {
                        state.capabilityIndex.set(capabilityIndex, sampleIndex);
                        renderCapabilityStage(card, capability, sampleIndex);
                    });
                    track.appendChild(thumb);
                });

                card.querySelector(".prev").addEventListener("click", () => {
                    const current = state.capabilityIndex.get(capabilityIndex);
                    const nextIndex = (current - 1 + capability.samples.length) % capability.samples.length;
                    state.capabilityIndex.set(capabilityIndex, nextIndex);
                    renderCapabilityStage(card, capability, nextIndex);
                });

                card.querySelector(".next").addEventListener("click", () => {
                    const current = state.capabilityIndex.get(capabilityIndex);
                    const nextIndex = (current + 1) % capability.samples.length;
                    state.capabilityIndex.set(capabilityIndex, nextIndex);
                    renderCapabilityStage(card, capability, nextIndex);
                });

                renderCapabilityStage(card, capability, 0);
                grid.appendChild(card);
            });
        }

        function initUIIcons() {
            const navIcons = {
                overview: "overview",
                teaser: "teaser",
                abstract: "abstract",
                capabilities: "capabilities",
                method: "method",
                schedule: "schedule",
                comparisons: "comparisons",
                results: "results"
            };

            document.querySelectorAll(".nav-item").forEach((item) => {
                const target = (item.getAttribute("href") || "").replace("#", "");
                const dot = item.querySelector(".nav-dot");
                const label = item.querySelector("span:last-child");
                if (dot) {
                    dot.innerHTML = iconMarkup(navIcons[target], "ui-icon nav-dot-icon");
                }
                if (label) {
                    label.classList.add("nav-label");
                }
            });

            document.querySelectorAll("main section[id]").forEach((section) => {
                const heading = section.querySelector(".section-head h3");
                if (!heading) {
                    return;
                }
                const iconName = navIcons[section.id] || "overview";
                const text = heading.textContent;
                heading.classList.add("section-title");
                heading.innerHTML = iconMarkup(iconName, "ui-icon section-title-icon") + "<span>" + text + "</span>";
            });
        }

        function updateScheduleButtons() {
            const playPauseButton = document.getElementById("playPauseButton");
            const resetButton = document.getElementById("resetButton");

            if (playPauseButton) {
                const label = state.playing ? "Pause" : "Play";
                playPauseButton.innerHTML = iconMarkup(state.playing ? "pause" : "play", "ui-icon schedule-button-icon") + "<span>" + label + "</span>";
            }

            if (resetButton) {
                resetButton.innerHTML = iconMarkup("reset", "ui-icon schedule-button-icon") + "<span>Reset</span>";
            }
        }

        function initMethod() {
            const methodGrid = document.getElementById("methodGrid");
            const steps = siteConfig.method;
            const inputStep = steps[0] || { title: "Input Representation", copy: "", tokens: [] };
            const modelStep = steps[1] || { title: "Core Model", copy: "", tokens: [] };
            const condStep = steps[2] || { title: "Conditioning Logic", copy: "", tokens: [] };
            const outputStep = steps[3] || { title: "Outputs", copy: "", tokens: [] };
            const chipTones = ["tone-a", "tone-b", "tone-c", "tone-d", "tone-e"];
            const arrowMarkup = `
                <div class="method-arrow" aria-hidden="true">
                    <span class="method-arrow-packet packet-a"></span>
                    <span class="method-arrow-packet packet-b"></span>
                    <span class="method-arrow-packet packet-c"></span>
                </div>
            `;
            const renderChips = (tokens) => tokens.map((token, index) => {
                return "<span class='method-chip " + chipTones[index % chipTones.length] + "'>" + token + "</span>";
            }).join("");

            methodGrid.innerHTML = `
                <div class="method-pipeline-shell">
                    <h4 class="method-pipeline-title">Model Training Pipeline</h4>
                    <p class="method-pipeline-subtitle">A dummy architecture flow inspired by the MAGNet-style training diagram.</p>
                    <div class="method-pipeline-scroll">
                        <div class="method-pipeline-board">
                            <div class="method-flow-track">
                                <div class="method-flow-stage input">
                                    <div class="method-stage-kicker">Input Motion</div>
                                    <div class="method-scene-card">
                                        <div class="method-person agent-a"></div>
                                        <div class="method-person agent-b"></div>
                                    </div>
                                    <div class="method-stage-note">${inputStep.title}</div>
                                    <div class="method-repr-stack">
                                        <div class="method-repr-row agent-a">
                                            <div class="method-repr-agent">A</div>
                                            <div class="method-repr-tokens">${renderChips(inputStep.tokens)}</div>
                                        </div>
                                        <div class="method-repr-row agent-b">
                                            <div class="method-repr-agent">B</div>
                                            <div class="method-repr-tokens">${renderChips(inputStep.tokens.slice().reverse())}</div>
                                        </div>
                                    </div>
                                </div>

                                ${arrowMarkup}

                                <div class="method-flow-stage encoding">
                                    <div class="method-stage-kicker">Encoding</div>
                                    <div class="method-vq-block encoder">
                                        <strong>VQ-VAE</strong>
                                        <span>Encoder</span>
                                        <div class="method-vq-bars"><span></span><span></span><span></span><span></span></div>
                                    </div>
                                    <div class="method-context-row">
                                        <span class="method-context-badge pink">beta</span>
                                        <span class="method-context-badge green">delta Tcan</span>
                                    </div>
                                    <div class="method-stage-note">${modelStep.title}</div>
                                </div>

                                ${arrowMarkup}

                                <div class="method-flow-stage tokens">
                                    <div class="method-stage-kicker">Noisy Tokens</div>
                                    <div class="method-token-math">
                                        <div class="method-token-col">
                                            <div class="method-token-col-label">M<sub>0</sub></div>
                                            <span class="method-token-square agent-a"></span>
                                            <span class="method-token-square agent-b"></span>
                                            <span class="method-token-square agent-a"></span>
                                            <span class="method-token-square agent-b"></span>
                                            <span class="method-token-square agent-a"></span>
                                        </div>
                                        <div class="method-token-sign">+</div>
                                        <div class="method-token-col">
                                            <div class="method-token-col-label">&epsilon;</div>
                                            <span class="method-token-square noise"></span>
                                            <span class="method-token-square noise"></span>
                                            <span class="method-token-square noise"></span>
                                            <span class="method-token-square noise"></span>
                                            <span class="method-token-square noise"></span>
                                        </div>
                                        <div class="method-token-sign">=</div>
                                        <div class="method-token-col">
                                            <div class="method-token-col-label">M&#771;(&tau;)</div>
                                            <span class="method-token-square mix-a"></span>
                                            <span class="method-token-square mix-b"></span>
                                            <span class="method-token-square mix-a"></span>
                                            <span class="method-token-square mix-b"></span>
                                            <span class="method-token-square mix-a"></span>
                                        </div>
                                    </div>
                                    <div class="method-stage-note">${condStep.title}</div>
                                </div>

                                ${arrowMarkup}

                                <div class="method-flow-stage denoiser">
                                    <div class="method-stage-kicker">Denoiser F<sub>&phi;</sub></div>
                                    <div class="method-denoiser-box">
                                        <strong>${modelStep.step}</strong>
                                        <h5>DFoT</h5>
                                        <p>Diffusion-forcing transformer with iterative coordination.</p>
                                        <div class="method-denoiser-steps"><span></span><span></span><span></span><span></span><span></span></div>
                                    </div>
                                    <div class="method-stage-note">${modelStep.copy}</div>
                                </div>

                                ${arrowMarkup}

                                <div class="method-flow-stage clean">
                                    <div class="method-stage-kicker">M<sub>0</sub></div>
                                    <div class="method-clean-stack">
                                        <span class="method-token-square agent-a"></span>
                                        <span class="method-token-square agent-b"></span>
                                        <span class="method-token-square agent-a"></span>
                                        <span class="method-token-square agent-b"></span>
                                        <span class="method-token-square agent-a"></span>
                                    </div>
                                    <div class="method-stage-note">${outputStep.step}</div>
                                </div>

                                ${arrowMarkup}

                                <div class="method-flow-stage decoding">
                                    <div class="method-stage-kicker">Decoding</div>
                                    <div class="method-vq-block decoder">
                                        <strong>VQ-VAE</strong>
                                        <span>Decoder</span>
                                        <div class="method-vq-bars"><span></span><span></span><span></span><span></span></div>
                                    </div>
                                    <div class="method-context-row">
                                        <span class="method-context-badge pink">beta</span>
                                        <span class="method-context-badge green">delta Tcan</span>
                                    </div>
                                    <div class="method-stage-note">${outputStep.title}</div>
                                </div>

                                ${arrowMarkup}

                                <div class="method-flow-stage output">
                                    <div class="method-stage-kicker">Reconstructed X<sup>*</sup></div>
                                    <div class="method-scene-card">
                                        <div class="method-person agent-a" style="--person-left:24px; --person-tilt:-14deg;"></div>
                                        <div class="method-person agent-b" style="--person-left:54px; --person-tilt:10deg;"></div>
                                    </div>
                                    <div class="method-stage-note">${outputStep.copy}</div>
                                </div>
                            </div>

                            <div class="method-pipeline-divider"></div>

                            <div class="method-legend-grid">
                                <div>
                                    <div class="method-legend-title">Agents</div>
                                    <div class="method-agent-list">
                                        <div class="method-agent-pill"><span style="background:#769ad7;"></span><span>Agent A</span></div>
                                        <div class="method-agent-pill"><span style="background:#8ca9dd;"></span><span>Agent B</span></div>
                                    </div>
                                </div>

                                <div>
                                    <div class="method-legend-title">Motion Token m<sub>p</sub></div>
                                    <div class="method-composition-card">
                                        <div class="method-composition-row">
                                            <strong>m<sup>A</sup></strong>
                                            <div class="method-composition-inner">${renderChips(inputStep.tokens)}</div>
                                        </div>
                                        <div class="method-composition-row">
                                            <strong>m<sup>B</sup></strong>
                                            <div class="method-composition-inner">${renderChips(inputStep.tokens.slice().reverse())}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function getScheduleCellClass(rowIndex, columnIndex, cleanIndices, frame) {
            if (rowIndex === 2 && columnIndex < 4) {
                return "schedule-cell context";
            }
            if (columnIndex < 4) {
                return "schedule-cell context";
            }
            if (!cleanIndices.includes(columnIndex)) {
                return "schedule-cell";
            }
            const visibleClean = cleanIndices.filter((index) => index <= cleanIndices[Math.min(frame, cleanIndices.length - 1)]);
            if (visibleClean.includes(columnIndex)) {
                return "schedule-cell clean" + (columnIndex === visibleClean[visibleClean.length - 1] ? " focus" : "");
            }
            return "schedule-cell noisy";
        }

        function renderSchedule() {
            const mode = siteConfig.scheduleModes[state.scheduleModeIndex];
            setText("scheduleTitle", mode.label);
            setText("scheduleDescription", mode.description);
            setText("scheduleFormula", mode.formula);
            setText("frameLabel", "Frame " + (state.frame + 1) + " / " + mode.cleanPattern.length);

            document.querySelectorAll(".schedule-tab").forEach((button, index) => {
                button.classList.toggle("active", index === state.scheduleModeIndex);
            });

            const rows = document.getElementById("scheduleRows");
            rows.innerHTML = "";
            scheduleRows.forEach((row, rowIndex) => {
                const rowElement = document.createElement("div");
                rowElement.className = "schedule-row";
                const label = document.createElement("div");
                label.className = "schedule-label";
                label.textContent = row.label;
                rowElement.appendChild(label);

                for (let columnIndex = 0; columnIndex < 12; columnIndex += 1) {
                    const cell = document.createElement("div");
                    cell.className = getScheduleCellClass(rowIndex, columnIndex, mode.cleanPattern, state.frame);
                    rowElement.appendChild(cell);
                }
                rows.appendChild(rowElement);
            });
        }

        function startScheduleLoop() {
            clearInterval(state.timer);
            const delay = 1200 - (state.speed - 1) * 160;
            state.timer = setInterval(() => {
                if (!state.playing) {
                    return;
                }
                const mode = siteConfig.scheduleModes[state.scheduleModeIndex];
                state.frame = (state.frame + 1) % mode.cleanPattern.length;
                renderSchedule();
            }, delay);
        }

        function initSchedule() {
            const tabs = document.getElementById("scheduleTabs");
            const axis = document.getElementById("scheduleAxis");
            axis.innerHTML = "<div>Time</div>" + Array.from({ length: 12 }, (_, index) => "<div>t" + index + "</div>").join("");

            tabs.innerHTML = "";
            siteConfig.scheduleModes.forEach((mode, index) => {
                const button = document.createElement("button");
                button.className = "schedule-tab";
                button.type = "button";
                button.textContent = mode.label;
                button.addEventListener("click", () => {
                    state.scheduleModeIndex = index;
                    state.frame = 0;
                    renderSchedule();
                });
                tabs.appendChild(button);
            });

            document.getElementById("playPauseButton").addEventListener("click", () => {
                state.playing = !state.playing;
                updateScheduleButtons();
            });

            document.getElementById("resetButton").addEventListener("click", () => {
                state.frame = 0;
                renderSchedule();
            });

            document.getElementById("speedRange").addEventListener("input", (event) => {
                state.speed = Number(event.target.value);
                startScheduleLoop();
            });

            updateScheduleButtons();
            renderSchedule();
            startScheduleLoop();
        }

        function initComparisons() {
            const comparisonGrid = document.getElementById("comparisonGrid");
            comparisonGrid.innerHTML = "";

            siteConfig.comparisons.forEach((item) => {
                const card = document.createElement("article");
                card.className = "comparison-card";
                card.innerHTML = `
                    <div class="comparison-head">
                        <h4>${item.title}</h4>
                    </div>
                    <div class="comparison-body">
                        <p class="comparison-copy">${item.description}</p>
                        <div class="comparison-media">
                            <section class="compare-pane">
                                <header>${item.leftLabel}</header>
                                <div class="compare-stage"></div>
                            </section>
                            <section class="compare-pane">
                                <header>${item.rightLabel}</header>
                                <div class="compare-stage"></div>
                            </section>
                        </div>
                    </div>
                `;

                const stages = card.querySelectorAll(".compare-stage");
                renderMedia(stages[0], item.leftMedia, item.leftLabel, item.leftMedia.caption);
                renderMedia(stages[1], item.rightMedia, item.rightLabel, item.rightMedia.caption);
                comparisonGrid.appendChild(card);
            });
        }

        function initResults() {
            setText("resultTitle", siteConfig.resultSection.title);
            setText("resultCopy", siteConfig.resultSection.copy);
            renderMedia(
                document.getElementById("resultMedia"),
                { video: siteConfig.resultSection.video, image: siteConfig.resultSection.image },
                siteConfig.resultSection.title,
                "Use this final media block for your strongest long-horizon or end-to-end result."
            );

            const metrics = document.getElementById("resultMetrics");
            metrics.innerHTML = "";
            siteConfig.resultSection.metrics.forEach((item) => {
                const block = document.createElement("div");
                block.className = "longform-metric";
                block.innerHTML = "<strong>" + item.title + "</strong><span>" + item.copy + "</span>";
                metrics.appendChild(block);
            });
        }

        function initScrollSpy() {
            const sections = document.querySelectorAll("main section[id]");
            const navItems = document.querySelectorAll(".nav-item");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    navItems.forEach((item) => {
                        item.classList.toggle("active", item.getAttribute("href") === "#" + entry.target.id);
                    });
                });
            }, { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 });

            sections.forEach((section) => observer.observe(section));
        }

        function init() {
            initTheme();
            initHero();
            initUIIcons();
            initTeaser();
            initAbstract();
            initCapabilities();
            initMethod();
            initSchedule();
            initComparisons();
            initResults();
            initScrollSpy();
        }

        init();
