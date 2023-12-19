<?php $this->layout('master', ['title' => $title]) ?>

<!-- <h2>Olá <?php echo $name; ?></h2>
 -->
<?php $this->insert('components/banner') ?>
<?php $this->insert('components/options') ?>
<?php $this->insert('components/cta_offer') ?>
<?php $this->insert('components/offers') ?>
<div class="offerSliderContainer">
  <?php $this->insert('components/offers_slider') ?>
</div>
<?php $this->insert('components/services') ?>
<?php $this->insert('components/region') ?>
<?php $this->insert('components/map') ?>