# Stage 1: Build Angular Application
FROM node:14 AS build-angular
WORKDIR /app

# Copy Angular application source code
COPY CustomerFront/ ./CustomerFront/
WORKDIR /app/CustomerFront

# Install dependencies and build the Angular application
RUN npm install
RUN npm run build --prod

# Stage 2: Build .NET Application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-dotnet
WORKDIR /src

# Copy .NET application source code
COPY CustomerAPI/ ./CustomerAPI/
WORKDIR /src/CustomerAPI

# Restore and build the .NET application
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# Stage 3: Final Stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copy built .NET application
COPY --from=build-dotnet /app/publish ./

# Copy built Angular application
COPY --from=build-angular /app/CustomerFront/dist/customer-front ./wwwroot/

# Expose port and run the application
EXPOSE 5105
ENTRYPOINT ["dotnet", "WebAPI.dll"]
