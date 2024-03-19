Vertical scaling: get a bigger server 
- positive: easier to maintain
- negative: servers come so large ad still have one point of failure
- single point of failure

horizontal scaling: a lot of servers using load balancer
- better if its stateless (each request start from 0)
- eliminates single point of failure

the architecture has to be the simplest to meet the project requirements

where the servers are located: own data centers, cloud serivices like ec2, fully managerd serverless services

periodic backup database
cold standby database: another database to restore the backup and make the application working if the main database goes down

warm standby: a replication database always working to replace the main database if it goes down

hot standby: use two databases at the same time, sending the update/insert requests to both

shard database -> divide database in small parts across multiples computers - avoid complex joins or other complex operations
- better for NoSql databases
databases that use shard: mongo, cassandra
-take the traffic into account when define the shards and reshard them

normalized data(mais relacional): less storage, slower select, more joins and updates in a place

dernomalized data(mais nosql): more storage, fast select, updates are hard(has to update all records)

desnormalization ->transform the normalized data into denormalized data

data lake: put data into text files (csv, json, etc...) and store in bing storage system. common approach for big data
eg: amazon glue

 A database stores the current data required to power an application whereas a data warehouse stores current and historical data for one or more systems in a predefined and fixed schema for the purpose of analyzing the data.

 While a data lake holds data(unstructured data) of all structure types, including raw and unprocessed data, a data warehouse stores data that has been treated and transformed with a specific purpose in mind, which can then be used to source analytic or operational reporting.

 data warehouse example: redshift
 amazon athena(serverless): query nos arquivos do data lake (s3)

eg: glue lê do s3 e o athena/redshift pega

ACID:
atomicity: a transaction has to success 100% or fail 100%
consistency: all database rules are enforced
isolation: no transaction is affected by any other transactions in progress
durability: after a transaction its committed immediately

to choose the DB use CAP theorem -> Consistency, availability, partition tolerance (partition data)

caching: use a cache layer - has to think about the expiration of the cache - smart cache that update with operations - think about cold cache, the time before the cache being ready, the database can crash with a lot of requests

eviction polices(how the cache decides what will be cached):
- LRU:  least recently used
- LFU: least frequently used
- FIFO: first in first out

cache technologies:
redis, elastiCache(use redis)...

CDN (Content Delivery Network) - good for cache of static content - eg: aws cloudfront

resiliency:
Be smart about distributing your system.
- distribute backup in different regions
- make sure to make plans to failures
- fast provisioning a new system
- make questions about budget x availability, some times its not worth

types of storage: hot, cool and cold
s3 already replicate the data for you
use cold data to cut prices ex: glacier 


HDFS (hadoop distributed file system):
- The server responsible for coordinate requests is the name node

pointer to the last node in a linked list to insert be O(1)

balance three: O(n)
busca grafo:
breadth-first-search BFS: vai level por level
depth-first-search DFS: vai até o fim de cada caminho (melhor quando tem muitos nós)

binary search for sorted arrays - go to the middle and divide O(LOGN)

Merge sort scales well to large lists O(nlogn)
quicksort - very fast, unless hit the worst case scenario On^2

search and information retrieval:
- use index to group informations

TF(term frequency)-  How often a word appears in a document, maybe its relevant to the relevance

search on hash table O(1)

spark do streaming, sql, ml, gaph, data process

mineração de dados é o processo de explorar dados à procura de padrões consistentes, como regras de associação ou sequências temporais, para detectar relacionamentos sistemáticos entre variáveis, detectando assim novos subconjuntos de dados

O Hadoop processa dados em lotes. O Spark processa dados em tempo real. O Hadoop é econômico. O Spark é comparativamente mais caro.

solution to process logs:
serverless solution: firehose -> s3 -> glue -> athena
managed solution: firehose -> s3 -> redshift -> quicksight

redshift carrega as tabelas a partir de uma fonte (s3, glue...)
hybrid cloud: combined own data centers or private clouds with public clouds

multi cloud = mode than one public cloud provider


interview tips: start clarifying requirements
- ask lots of questions
- think out loud
- ask about storage, traffic, backups, use cases, what transaction rate
- start with customer experience to define experiment (ask questions about ux, ex: how users will discover videos on yt?)
define scaling requirements
- define availability requirements ( how much down time)
- start with high level services
- its ok to say idk
- ask if can make it better
- monitoring
- ask if want to dive into more
- no banco colocar as tabelas do lado
- perguntar quanto de abstração. se preciso falar dos algoritmos, tabelas, etc...
- what challenges? team size? learning?

URL shortening service case:
So we are talking about something like biy.ly, right? a service where anyone can enter a url and get a shorter url.
whar sort of scale?
any restrictions about the characters?
can people create custom url? allow edit and delete urls? how long urls should last for? user login?
the return is 301 redirect (301 o browser grava cache e 302 não)
301 permanent redirect
302 temporary redirect

restaurante system case:
is it for one restaurant or many
think about user experience: user want to select a restaurant, enter table size, find a list of available time, get confirmation, change or cancel, see menu
it has to be fast and relaiable, shoud we think about it over cost?
reservation length, business hours, notes
sms notification


web crawler:
what kind of sites? how many pages? check pages before? what should we store? dynamic content? whats the purpose of the crowler? api or service?
create a hashmap to avoid duplicated content or put in a temporary db

top sellers: should break up by categories? from what time range? where will it be?
process all records or add a column with count?

database scaling, high concurrency, failure scenarios
come with at least 2 solutions and ask

extensability -> easy to change and easy to add

VER MAIS SOBRE O CAP THEOREM

