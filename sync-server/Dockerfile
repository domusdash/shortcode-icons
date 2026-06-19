FROM ghcr.io/kozea/radicale:stable

# Copy custom configurations and users
COPY config /etc/radicale/config
COPY rights /etc/radicale/rights
COPY users /etc/radicale/users

# Override the default command to listen on port 8080 (required for DigitalOcean health check)
CMD ["--hosts", "0.0.0.0:8080,[::]:8080"]
