        // Main customization entrypoint for this template.
        const siteConfig = {
            brand: {
                mark: "MDN",
                title: "Micro-DualNet",
                subtitle: "Dual-Path Spatio–Temporal Network for Micro-Action Recognition"
            },
            hero: {
                badge: "FG 2026",
                title: "Micro-DualNet: Dual-Path Spatio–Temporal Network for Micro-Action Recognition",
                tagline: "A keypoint-guided dual-path network that processes anatomically-grounded body entities through parallel Spatial-Temporal and Temporal-Spatial pathways, enabling flexible per-entity processing for fine-grained micro-action recognition.",
                authors: [
                    { name: "Naga VS Raviteja Chappa", url: "https://nchappa.github.io", markers: ["1"] },
                    { name: "Evangelos Sariyanidi", url: "https://sariyanidi.com/", markers: ["1"] },
                    { name: "Lisa Yankowitz", url: "#", markers: ["1"] },
                    { name: "Gokul Nair", url: "#", markers: ["1"] },
                    { name: "Casey J. Zampella", url: "#", markers: ["1", "2"] },
                    { name: "Robert T. Schultz", url: "#", markers: ["1", "2"] },
                    { name: "Birkan Tunç", url: "#", markers: ["1", "2"] }
                ],
                affiliations: [
                    { label: "The Children's Hospital of Philadelphia, USA", markers: ["1"] },
                    { label: "Perelman School of Medicine, University of Pennsylvania, USA", markers: ["2"] }
                ],
                contributionNote: "",
                links: {
                    paper: "#",
                    code: "https://github.com/compsygroup/Micro-DualNet"
                },
                stats: [
                    { value: "65.10%", label: "Top-1 Accuracy on MA-52" },
                    { value: "76.88%", label: "Top-1 Accuracy on iMiGUE (state-of-the-art)" },
                    { value: "290", label: "Individuals in clinical validation study" }
                ],
                cardLabel: "FG 2026",
                cardCopy: "Micro-DualNet — Dual-Path Spatio–Temporal Network for Micro-Action Recognition. Children's Hospital of Philadelphia & University of Pennsylvania."
            },
            teaser: {
                description: "Overview of the Micro-DualNet framework showing dual ST and TS pathways with entity-level adaptive routing.",
                video: "",
                iframe: "",
                image: "",
                poster: ""
            },
            abstract: [
                "Micro-actions are subtle, localized movements lasting 1–3 seconds such as scratching one's head or tapping fingers. Such subtle actions are essential for social communication, ubiquitously used in natural interactions, and thus critical for fine-grained video understanding, yet remain poorly understood by current computer vision systems. We identify a fundamental challenge: micro-actions exhibit diverse spatio-temporal characteristics where some are defined by spatial configurations (e.g., \"covering face\") while others manifest through temporal dynamics (e.g., \"leg shaking\"). Existing methods that commit to a single spatio-temporal decomposition cannot accommodate this diversity.",
                "We propose Micro-DualNet, a dual-path network that processes anatomically-grounded spatial entities through parallel Spatial-Temporal (ST) and Temporal-Spatial (TS) pathways. The ST path captures spatial configurations before modeling temporal dynamics, while the TS path inverts this order to prioritize temporal dynamics. Rather than fixed fusion, we introduce entity-level adaptive routing where each body part learns its optimal processing preference, complemented by Mutual Action Consistency (MAC) loss that enforces cross-path coherence. Extensive experiments demonstrate competitive performance on MA-52 (65.10% Top-1, 68.72% F1mean) and state-of-the-art results on iMiGUE (76.88% Top-1). Clinical validation on an in-house dataset of 290 individuals demonstrates that Micro-DualNet-detected micro-actions reveal statistically significant behavioral differences between kids with autism spectrum disorder, other psychiatric conditions, or typical development."
            ],
            highlights: [
                "First dual-path architecture with entity-level adaptive routing — each body part independently learns its optimal ST vs TS processing blend.",
                "State-of-the-art on iMiGUE (76.88% Top-1, +12.50% over PoseConv3D) and competitive on MA-52 (65.10% Top-1, 68.72% F1mean).",
                "Mutual Action Consistency (MAC) loss enforces cross-path temporal coherence, contributing +2.96% on MA-52 and +4.23% on iMiGUE.",
                "Clinical validation on 290 individuals reveals statistically significant behavioral differences across ASD, psychiatric, and typically-developing groups."
            ],
            capabilities: [
                {
                    title: "MA-52 Benchmark",
                    chip: "Full-Body",
                    description: "MA-52 is a large-scale micro-action dataset of 22,422 samples collected from psychological interviews, covering 52 action-level categories across 7 body-level groups. Micro-DualNet achieves 65.10% Top-1 and 68.72% F1mean, outperforming MANet by 3.13% F1mean using adaptive keypoint-guided entity extraction instead of fixed body regions.",
                    samples: [
                        { label: "Position-based", note: "Actions like 'covering face' are characterized by final spatial configurations — the ST path excels here.", video: "", image: "" },
                        { label: "Motion-based", note: "Actions like 'leg shaking' are defined by repetitive temporal patterns — the TS path excels here.", video: "", image: "" },
                        { label: "Dual-path", note: "Entity-level adaptive routing learns the optimal ST/TS blend per body part, yielding +9.99% over single-path baselines.", video: "", image: "" }
                    ]
                },
                {
                    title: "iMiGUE Benchmark",
                    chip: "Upper-Body",
                    description: "iMiGUE focuses on 32 upper-body micro-gesture categories collected from sports interviews (12,899 train / 4,562 test samples). Using K=5 entities (excluding lower body for seated subjects), Micro-DualNet achieves state-of-the-art 76.88% Top-1 accuracy, surpassing PoseConv3D by 12.50% and demonstrating that adaptive entity extraction particularly benefits concentrated upper-body gestures.",
                    samples: [
                        { label: "Pose + RGB", note: "Full model fusing keypoint-guided entities with global CNN features: 76.88% Top-1.", video: "", image: "" },
                        { label: "RGB Only", note: "Entity-aware RGB-only variant: 71.54% Top-1, outperforming all prior skeleton-based methods.", video: "", image: "" },
                        { label: "Pose Only", note: "Skeleton-only variant: 68.92% Top-1, surpassing all pure skeleton baselines.", video: "", image: "" }
                    ]
                },
                {
                    title: "Clinical Validation",
                    chip: "Healthcare",
                    description: "Micro-DualNet was applied to an in-house dataset of 290 individuals (ages 5–52) recorded during 2–3 minute conversations. Participants were classified into ASD (n=120), non-autistic psychiatric (PSY, n=46), and typically developing (TDC, n=124) groups. Pairwise hurdle analysis revealed statistically significant behavioral differences in micro-action engagement and intensity across groups.",
                    samples: [
                        { label: "ASD vs PSY", note: "PSY showed elevated 'retracting feet' intensity (p<0.001) and lower 'turning head' intensity (p<0.05) vs ASD.", video: "", image: "" },
                        { label: "ASD vs TDC", note: "ASD showed higher 'head up' probability and lower 'stretching feet' probability than TDC (p<0.01).", video: "", image: "" },
                        { label: "PSY vs TDC", note: "PSY showed elevated 'retracting feet' intensity compared to TDC (p<0.01), aligning with established phenotypes.", video: "", image: "" }
                    ]
                }
            ],
            method: [
                {
                    step: "Step 01",
                    title: "Spatial Entity Module (SEM)",
                    copy: "ResNet-101 with TSM extracts per-frame CNN features. 25 OpenPose keypoints define K anatomically-grounded bounding boxes (head, face, left hand, right hand, torso, lower body) computed dynamically per frame. ROIAlign extracts fixed-size entity features, refined by depthwise separable convolutions to D=256 dimensions with learnable position embeddings.",
                    tokens: ["ResNet-101", "TSM", "OpenPose", "ROIAlign", "K=6 entities"]
                },
                {
                    step: "Step 02",
                    title: "ST Path — Spatial then Temporal",
                    copy: "The Spatial-Temporal path first applies a Spatial Transformer across the K entities within each frame (capturing inter-entity spatial configurations), then applies a Temporal Transformer across T frames per entity (capturing how those configurations evolve over time). Residual MLP connections preserve original entity features.",
                    tokens: ["Spatial-T", "Temporal-T", "spatial config", "temporal evolution"]
                },
                {
                    step: "Step 03",
                    title: "TS Path — Temporal then Spatial",
                    copy: "The Temporal-Spatial path inverts the processing order: a Temporal Transformer first captures motion dynamics per entity across frames, then a Spatial Transformer models the resulting spatial relationships. This order prioritizes rhythm and motion patterns over static pose configurations.",
                    tokens: ["Temporal-T", "Spatial-T", "motion dynamics", "rhythm patterns"]
                },
                {
                    step: "Step 04",
                    title: "Adaptive Routing + MAC Loss",
                    copy: "Entity-level adaptive routing learns per-entity softmax weights over ST and TS outputs, fusing them based on each body part's spatio-temporal characteristics. Mutual Action Consistency (MAC) loss applies entity-aware contrastive learning between paths before routing, enforcing temporal coherence while preserving complementary specialization. Final features combine fused entity representations with global CNN features for classification.",
                    tokens: ["routing weights", "MAC loss", "contrastive", "classification"]
                }
            ],
            scheduleModes: [
                {
                    label: "ST Path",
                    description: "The Spatial-Temporal path first models spatial entity configurations within each frame, then captures how those configurations evolve across time. Position-defined micro-actions like 'covering face' benefit most from this processing order.",
                    formula: "ST: Spatial-T(X) → Temporal-T(X_spatial)",
                    cleanPattern: [4, 5, 6, 7, 8, 9, 10, 11]
                },
                {
                    label: "TS Path",
                    description: "The Temporal-Spatial path first extracts per-entity temporal dynamics across frames, then models the spatial relationships between those motion patterns. Motion-defined micro-actions like 'leg shaking' benefit most from this processing order.",
                    formula: "TS: Temporal-T(X) → Spatial-T(X_temporal)",
                    cleanPattern: [5, 6, 7, 8]
                },
                {
                    label: "Dual Path",
                    description: "Entity-level adaptive routing blends ST and TS representations with learned per-entity weights. Each body part independently selects its optimal processing preference, consistently outperforming either single path alone (+9.99% over single-path).",
                    formula: "X_fused = α_ST · X_ST + α_TS · X_TS",
                    cleanPattern: [4, 5, 6, 7, 8, 9]
                }
            ],
            comparisons: [
                {
                    title: "MANet (Fixed Regions) vs Micro-DualNet",
                    description: "MANet uses predefined fixed body regions that misalign under viewpoint changes. Micro-DualNet's adaptive keypoint-guided entity extraction dynamically adjusts bounding boxes per frame, improving F1mean by 3.13% on MA-52.",
                    leftLabel: "MANet",
                    rightLabel: "Micro-DualNet",
                    leftMedia: { video: "", image: "", caption: "MANet: 65.59% F1mean on MA-52 using fixed spatial regions." },
                    rightMedia: { video: "", image: "", caption: "Micro-DualNet: 68.72% F1mean on MA-52 with adaptive keypoint-guided entities." }
                },
                {
                    title: "Single-Path vs Dual-Path Processing",
                    description: "ST-only and TS-only paths show complementary failure modes: ST excels on position-defined actions, TS on motion-defined ones. The dual-path architecture with entity routing achieves +9.99% over single path, with the largest gains (+31%) on hard action categories.",
                    leftLabel: "Single Path (ST or TS)",
                    rightLabel: "Dual Path (Ours)",
                    leftMedia: { video: "", image: "", caption: "Single-path baseline: 62.14% Top-1 on MA-52." },
                    rightMedia: { video: "", image: "", caption: "Dual-path with routing + MAC: 65.10% Top-1 on MA-52 (+31% on hard categories)." }
                }
            ],
            resultSection: {
                title: "Clinical Validation",
                copy: "Beyond benchmark performance, Micro-DualNet was validated on an in-house dataset of 290 individuals (ages 5–52) recorded during 2–3 minute naturalistic conversations. Participants included children and adults with autism spectrum disorder (ASD, n=120), non-autistic psychiatric conditions (PSY, n=46), and typically developing controls (TDC, n=124). For the ten most frequent micro-actions, pairwise hurdle analysis tested both engagement probability (logistic GLM) and intensity among engagers (fractional logit). Results reveal statistically significant behavioral differences across groups — including elevated 'retracting feet' intensity in PSY vs both ASD and TDC (p<0.001), and increased 'shaking legs' probability in ASD vs PSY — providing initial evidence that automated micro-action detection can support scalable behavioral assessment in clinical settings.",
                video: "",
                image: "",
                metrics: [
                    { title: "290 Individuals", copy: "Ages 5–52 across ASD (n=120), PSY (n=46), and TDC (n=124) diagnostic groups." },
                    { title: "Significant Differences", copy: "10 micro-actions tested; multiple statistically significant pairwise group differences identified (p<0.05)." },
                    { title: "Clinical Potential", copy: "Automated micro-action detection may support scalable behavioral assessment and complement manual clinical coding workflows." }
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
            const nextTheme = theme === "dark" ? "dark" : "light";

            root.dataset.theme = nextTheme;

            if (metaTheme) {
                metaTheme.setAttribute("content", nextTheme === "dark" ? "#182130" : "#5f96ea");
            }

            if (toggle) {
                toggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
                toggle.setAttribute("aria-label", nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
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
            const helper = target.id === "resultMedia" ? "" : "<code>Drop a media URL into siteConfig</code>";
            placeholder.innerHTML = "<div><strong>" + fallbackTitle + "</strong><p>" + fallbackCopy + "</p>" + helper + "</div>";
            target.appendChild(placeholder);
        }

        function initHero() {
            document.title = siteConfig.hero.title || "Micro-Dual-Net";
            document.getElementById("metaDescription").setAttribute(
                "content",
                siteConfig.hero.tagline || "Reusable research project website backbone."
            );
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
            const sectionIcons = {
                overview: "overview",
                teaser: "teaser",
                abstract: "abstract",
                capabilities: "capabilities",
                method: "method",
                schedule: "schedule",
                comparisons: "comparisons",
                results: "results"
            };

            document.querySelectorAll("main section[id]").forEach((section) => {
                const heading = section.querySelector(".section-head h3");
                if (!heading) {
                    return;
                }
                const iconName = sectionIcons[section.id] || "overview";
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
                                        <span class="method-vq-edge" aria-hidden="true"></span>
                                        <div class="method-vq-core">
                                            <strong>VQ-VAE</strong>
                                            <span>Encoder</span>
                                            <div class="method-vq-bars"><span></span><span></span><span></span><span></span></div>
                                            <div class="method-vq-mini-flow" aria-hidden="true"><span></span><span></span><span></span></div>
                                        </div>
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
                                        <span class="method-vq-edge" aria-hidden="true"></span>
                                        <div class="method-vq-core">
                                            <strong>VQ-VAE</strong>
                                            <span>Decoder</span>
                                            <div class="method-vq-bars"><span></span><span></span><span></span><span></span></div>
                                            <div class="method-vq-mini-flow" aria-hidden="true"><span></span><span></span><span></span></div>
                                        </div>
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
        }

        init();
