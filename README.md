# Prasmul Backend Test
Run on docker
<ul>
<li>1. Pull this repository</li>
<li>2. Make .env file </li>
<li>3. Run : <code>docker-composer up</code></li>
</ul>

Run directly:
<ul>
<li>1. Pull this repository</li>
<li>2. Make .env file </li>
<li>3. Make sure u have running mongodb instance</li>
<li>4. Install dependency : <code>npm i</code>
<li>5. Start the server: <code>npm run dev</code>

.env file example
<pre><code>
MONGO_URL=mongodb://127.0.0.1:27017/prasmul?retryWrites=true&w=majority
</code>
</pre>
