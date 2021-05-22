people
===
id  (string manual)
displayName  (string)
+ credits[]
+ media[]

media
===
id  (string autogen)
date  (timestamp)
type  (enum: MediaType)
config  (json)
title  (string)
description  (string)
creditIds[string, strings]
+ credits[]

credit
===
id
type  (enum: CreditTypes)
personId  (id)
+ person