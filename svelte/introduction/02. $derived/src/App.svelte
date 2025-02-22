<script>
	let originalPrice = $state(0);
	let discountPercentage = $state(0);
  
	function formatCurrency(value) {
	  return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	  }).format(value);
	}
  
	let priceInRupiah = $derived.by(() => formatCurrency(originalPrice));
  
	let discountedPrice = $derived.by(() => {
	  let discountAmount = (originalPrice * discountPercentage) / 100;
	  let finalPrice = originalPrice - discountAmount;
	  return formatCurrency(finalPrice);
	});
  </script>
  
  <style>
	.container {
	  background: white;
	  padding: 20px;
	  border-radius: 10px;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	  text-align: center;
	  width: 350px;
	}
  
	h2 {
	  color: #333;
	}
  
	.result {
	  font-size: 1.2em;
	  font-weight: bold;
	  color: #2c3e50;
	  margin-bottom: 15px;
	}
  
	label {
	  display: block;
	  font-weight: bold;
	  margin-top: 10px;
	  color: #555;
	}
  
	input {
	  width: 100%;
	  padding: 8px;
	  margin-top: 5px;
	  border: 1px solid #ccc;
	  border-radius: 5px;
	  font-size: 1em;
	}
  
	.final-price {
	  background: #2ecc71;
	  color: white;
	  padding: 10px;
	  margin-top: 20px;
	  font-size: 1.5em;
	  border-radius: 5px;
	}
  </style>
  
  <div class="container">
	<h2>Kalkulator Diskon 💸</h2>
  
	<p class="result">Harga Asli: {priceInRupiah}</p>
	
	<label for="originalPrice">Masukkan Harga Asli:</label>
	<input type="number" bind:value={originalPrice} />
  
	<label for="discountPercentage">Masukkan Persentase Diskon:</label>
	<input type="number" bind:value={discountPercentage} />
  
	<p class="final-price">Harga Setelah Diskon: {discountedPrice}</p>
  </div>
  