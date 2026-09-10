ordre pour push des migrations

# 1. Modifier contract.prisma

# 2. Émettre le nouveau contract
npm run contract:emit

# 3. Générer le plan de migration
npx prisma migration plan --name nom_de_la_migration

# 4. Vérifier la migration générée

# 5. L'appliquer
npx prisma db migrate