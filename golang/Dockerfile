FROM golang:1.20

WORKDIR /usr/src/app/golang

COPY . .

RUN go mod download

EXPOSE 8080

CMD ["go","run","main.go"]