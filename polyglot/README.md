## Java

- [ ] jdk (java, javac): Global

```bash
sudo apt install -y default-jdk
java --version && javac --version

java -ea 0.0-hello/Hello.java
jshell - <<-EOM
    System.out.println("Hello");
EOM
```

## Python

- [ ] python3, pip3: Global
- [ ] mypy: Global

```bash
# python3, pip3 is shipped with debian-buster
sudo apt install -y python3-pip
python3 -m pip --version
python3 -m pip install -U mypy
python3 --version

# pyenv
sudo apt-get update; sudo apt-get install -y make build-essential libssl-dev zlib1g-dev \
     libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
     libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
curl https://pyenv.run | bash
pyenv install -v 3.9.9
pyenv global 3.9.9
python --version

# modify `.zprofile`, `.profile`, `.zshrc` if neccesary
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zprofile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zprofile
echo 'eval "$(pyenv init --path)"' >> ~/.zprofile
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.profile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.profile
echo 'eval "$(pyenv init --path)"' >> ~/.profile
echo 'eval "$(pyenv init -)"' >> ~/.zshrc

# test
python 0.0-hello/hello.py
python -c 'print("Hello")'
python <<-EOM
  print('Hello')
EOM

# mypy
touch mypy.ini
```

## TypeScript/Node.js

- [ ] nvm: Global
- [ ] npm, node: Global
- [ ] tsc, ts-node: Local

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm --version && nvm install v14
node --version
npm init --yes
npm i -D typescript ts-node @types/node
npx tsc --version && npx ts-node --version

npx ts-node 0.0-hello/hello.ts
npx ts-node -e 'console.log("Hello")'
npx ts-node <<-EOM
  console.log('Hello')
EOM

# linters
npm i -D eslint@7 \
  @typescript-eslint/parser@4 \
  @typescript-eslint/eslint-plugin@4 \
  eslint-plugin-promise@^5.0.0 \
  eslint-plugin-import@^2.22.1 \
  eslint-plugin-node@^11.1.0 \
  eslint-config-standard-with-typescript@21
npx tsc --init # generate `tsconfig.json`
```

## Racket

- [ ] racket: Docker

```bash
alias racket='docker run -it --rm -v $(pwd):/src -w /src racket/racket:snapshot-full racket' # docker image
racket --version

racket 0.0-hello/hello.rkt
racket -e '(printf "Hello\n")'
```
