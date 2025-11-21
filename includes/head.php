<?php
$title = $title ?? 'Karibu Padel - No.1 Padel Court & Club in Zanzibar | Africa House Garden';
$description = $description ?? 'Experience world-class padel at Karibu Padel, Zanzibar\'s premier padel club. Located in Africa House Garden with stunning ocean views. Book your court now for lessons, tournaments, and social events.';
$keywords = 'padel zanzibar, padel court zanzibar, tennis zanzibar, africa house garden, karibu padel, padel club tanzania, sports zanzibar, ocean view padel, padel lessons, padel tournaments, beach sports zanzibar';
$ogImage = $ogImage ?? 'assets/generated/hero/hero-1920.jpg';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($title); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($description); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($keywords); ?>">
    <meta name="author" content="Karibu Padel">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($description); ?>">
    <meta property="og:image" content="<?php echo htmlspecialchars($ogImage); ?>">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Karibu Padel">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($title); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($description); ?>">
    <meta name="twitter:image" content="<?php echo htmlspecialchars($ogImage); ?>">
    
    <link rel="icon" type="image/png" href="assets/logo.png"> 

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <meta name="theme-color" content="#002B5B">
    
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        "name": "Karibu Padel",
        "description": "<?php echo addslashes($description); ?>",
        "telephone": "+255760777333",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Africa House Garden",
            "addressLocality": "Shangani",
            "addressRegion": "Zanzibar",
            "addressCountry": "TZ"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -6.163,
            "longitude": 39.185
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "22:00"
        },
        "priceRange": "$$"
    }
    </script>
    
    <style>
        /* Custom Animations */
        .animate-reveal {
            animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes reveal {
            to {
                opacity: 1;
                transform: translate(0);
            }
        }

        .reveal-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .reveal-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Blob Animations to match Framer Motion */
        @keyframes float-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, 30px) scale(1.1); }
            66% { transform: translate(-20px, 10px) scale(1.05); }
        }
        .animate-float-1 { animation: float-1 15s ease-in-out infinite; }

        @keyframes float-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-30px, -40px) scale(1.2); }
        }
        .animate-float-2 { animation: float-2 18s ease-in-out infinite; }

        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }

        @keyframes pulse-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.25); }
        }
        .animate-pulse-scale { animation: pulse-scale 2s ease-in-out infinite; }

        @keyframes pulse-scale-small {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
        .animate-pulse-scale-small { animation: pulse-scale-small 1.5s ease-in-out infinite; }
        
        /* For hero carousel parallax */
        .hero-parallax-container {
            will-change: transform, opacity;
        }
    </style>
</head>
<body class="bg-[#002B5B] overflow-x-hidden text-white">
