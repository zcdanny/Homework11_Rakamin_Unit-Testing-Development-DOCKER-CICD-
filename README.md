# Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-

Buatlah project API menggunakan expressjs dan sequelize (postgresql) menggunakan table todo yang berisi field title 

Kemudian pastikan terdapat fitur dibawah ini

1. List All Todo
2. Detail Todo
3. Create Todo
4. Delete Todo (Soft Delete)
   
Buatlah semua unit testing untuk masing-masing fitur api (crud unit testing), jalankan api 
![image](https://github.com/zcdanny/Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-/assets/100658079/49c0d4ac-c0b5-4a1e-8176-624510af4c19)

tersebut menggunakan Dockerfile serta Docker Compose 
![image](https://github.com/zcdanny/Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-/assets/100658079/34a174df-a0f7-43fb-bc9c-5dc51463b6fd)
![image](https://github.com/zcdanny/Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-/assets/100658079/b31a8fb4-8541-4742-92b0-45051b64189b)
![image](https://github.com/zcdanny/Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-/assets/100658079/b0f56dab-a192-4c8f-ab1d-95dd8ead707d)


dan jalankan CI/CD menggunakan GitLab (pakai github action karena tidak ada debit)

runner
![image](https://github.com/zcdanny/Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-/assets/100658079/4986037a-c49e-4209-a536-14addc1d453f)
![image](https://github.com/zcdanny/Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-/assets/100658079/1d25ab10-0683-47b6-aba7-de5e9c33d5c3)
![image](https://github.com/zcdanny/Homework11_Rakamin_Unit-Testing-Development-DOCKER-CICD-/assets/100658079/e97286fe-e237-497b-95bc-58f6f118fc47)

**Step nya untuk running
**
Clone repo tersebut ke local masing2

Open menggunakan VSCode

Open terminal dan jalankan script npm install

Setup database di file di folder config(sesuai punya kalian)

Create .env file 

Running migration untuk migrasi table nya dengan perintah npx sequelize db:migrate

Running seeding untuk sample data dengan perintah npx sequelize db:seed:all



