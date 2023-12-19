<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <title><?= $this->e($title) ?></title>
  <link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />
  <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="../assets/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="../assets/css/reset.css" rel="stylesheet" />
  <link href="../assets/css/styles.css" rel="stylesheet" />
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.12.4.js"></script>
  <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

</head>

<body>
  <header id="header" class="fixed-top">
    <?php $this->insert('partials/navbar') ?>
  </header>
  <main>
    <?= $this->section('content') ?>
  </main>
  <footer>
    <?php $this->insert('partials/footer') ?>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="../assets/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/swiper/swiper-bundle.min.js"></script>
  <script src="../assets/js/scripts.js"></script>

</body>

</html>
